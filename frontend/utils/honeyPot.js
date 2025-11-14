// frontend/lib/security.js
// Sistema de Segurança e Proteção contra Bots/Hackers

class SecuritySystem {
  constructor() {
    this.suspiciousActivity = [];
    this.isBot = false;
    this.init();
  }

  // ========================================
  // INICIALIZAÇÃO
  // ========================================
  init() {
    if (typeof window === 'undefined') return; // Proteção SSR

    this.setupHoneyPot();
    this.detectBots();
    this.monitorSuspiciousActivity();
    this.protectForms();
  }

  // ========================================
  // HONEYPOT - CAMPO INVISÍVEL
  // ========================================
  setupHoneyPot() {
    // Adiciona campos invisíveis em todos os formulários
    document.addEventListener('DOMContentLoaded', () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        // Campo honeypot (bots preenchem, humanos não veem)
        const honeypot = document.createElement('input');
        honeypot.type = 'text';
        honeypot.name = 'website_url'; // Nome que parece legítimo
        honeypot.id = 'website_url';
        honeypot.tabIndex = -1;
        honeypot.autocomplete = 'off';
        honeypot.style.cssText = `
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          opacity: 0 !important;
          pointer-events: none !important;
        `;
        
        form.appendChild(honeypot);

        // Timestamp para detectar submissões muito rápidas
        const timestamp = document.createElement('input');
        timestamp.type = 'hidden';
        timestamp.name = 'form_timestamp';
        timestamp.value = Date.now().toString();
        
        form.appendChild(timestamp);
      });
    });
  }

  // ========================================
  // VALIDAÇÃO DE FORMULÁRIO
  // ========================================
  validateForm(formData) {
    const errors = [];
    
    // 1. Verifica se o honeypot foi preenchido (indica bot)
    if (formData.website_url && formData.website_url.trim() !== '') {
      this.logSuspiciousActivity('honeypot_filled', {
        field: 'website_url',
        value: formData.website_url
      });
      return { valid: false, reason: 'bot_detected', errors };
    }

    // 2. Verifica tempo de preenchimento (muito rápido = bot)
    if (formData.form_timestamp) {
      const timeTaken = Date.now() - parseInt(formData.form_timestamp);
      const minimumTime = 3000; // 3 segundos mínimo
      
      if (timeTaken < minimumTime) {
        this.logSuspiciousActivity('form_too_fast', {
          timeTaken,
          minimumTime
        });
        return { valid: false, reason: 'too_fast', errors };
      }
    }

    // 3. Verifica padrões suspeitos no conteúdo
    const suspiciousPatterns = [
      /viagra|cialis|porn|casino|lottery|bitcoin/i,
      /<script|<iframe|javascript:|onclick=/i,
      /http:\/\/.*http:\/\//i, // Múltiplos links
      /(.)\1{10,}/i // Caracteres repetidos excessivamente
    ];

    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === 'string') {
        for (const pattern of suspiciousPatterns) {
          if (pattern.test(value)) {
            this.logSuspiciousActivity('suspicious_content', {
              field: key,
              pattern: pattern.toString()
            });
            errors.push(`Campo ${key} contém conteúdo suspeito`);
          }
        }
      }
    }

    return { valid: errors.length === 0, reason: null, errors };
  }

  // ========================================
  // DETECÇÃO DE BOTS
  // ========================================
  detectBots() {
    const botIndicators = {
      noMouse: true,
      noTouch: true,
      suspiciousUA: false,
      headless: false,
      webdriver: false
    };

    // 1. Detecta movimento do mouse
    const mouseListener = () => {
      botIndicators.noMouse = false;
      document.removeEventListener('mousemove', mouseListener);
    };
    document.addEventListener('mousemove', mouseListener);

    // 2. Detecta toque (mobile)
    const touchListener = () => {
      botIndicators.noTouch = false;
      document.removeEventListener('touchstart', touchListener);
    };
    document.addEventListener('touchstart', touchListener);

    // 3. Verifica User Agent suspeito
    const ua = navigator.userAgent.toLowerCase();
    const botPatterns = ['bot', 'crawler', 'spider', 'scraper', 'headless'];
    botIndicators.suspiciousUA = botPatterns.some(pattern => ua.includes(pattern));

    // 4. Detecta headless browsers
    botIndicators.headless = 
      navigator.webdriver === true ||
      !navigator.languages ||
      navigator.languages.length === 0;

    // 5. Detecta WebDriver (automação)
    botIndicators.webdriver = navigator.webdriver === true;

    // Avalia após 5 segundos
    setTimeout(() => {
      const botScore = Object.values(botIndicators).filter(v => v === true).length;
      
      if (botScore >= 2) {
        this.isBot = true;
        this.logSuspiciousActivity('bot_detected', botIndicators);
      }
    }, 5000);
  }

  // ========================================
  // MONITORA ATIVIDADES SUSPEITAS
  // ========================================
  monitorSuspiciousActivity() {
    // 1. Monitora cliques rápidos repetidos
    let clickCount = 0;
    let clickTimer = null;

    document.addEventListener('click', () => {
      clickCount++;
      
      if (clickTimer) clearTimeout(clickTimer);
      
      clickTimer = setTimeout(() => {
        if (clickCount > 20) {
          this.logSuspiciousActivity('excessive_clicks', { count: clickCount });
        }
        clickCount = 0;
      }, 1000);
    });

    // 2. Monitora tentativas de acesso ao console
    const consoleProps = ['log', 'warn', 'error', 'debug'];
    consoleProps.forEach(prop => {
      const original = console[prop];
      console[prop] = (...args) => {
        // Detecta tentativas de injeção
        const suspicious = args.some(arg => 
          typeof arg === 'string' && 
          /document\.cookie|localStorage|sessionStorage/i.test(arg)
        );
        
        if (suspicious) {
          this.logSuspiciousActivity('console_injection_attempt', { args });
        }
        
        original.apply(console, args);
      };
    });

    // 3. Monitora tentativas de cópia de dados sensíveis
    document.addEventListener('copy', (e) => {
      const selection = window.getSelection().toString();
      
      if (selection.length > 1000) {
        this.logSuspiciousActivity('large_text_copy', { 
          length: selection.length 
        });
      }
    });
  }

  // ========================================
  // PROTEÇÃO DE FORMULÁRIOS
  // ========================================
  protectForms() {
    document.addEventListener('DOMContentLoaded', () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
          // Se for bot detectado, bloqueia
          if (this.isBot) {
            e.preventDefault();
            console.warn('Submissão bloqueada: bot detectado');
            return false;
          }

          // Validação adicional pode ser feita aqui
        });
      });
    });
  }

  // ========================================
  // LOG DE ATIVIDADES SUSPEITAS
  // ========================================
  logSuspiciousActivity(type, data = {}) {
    const activity = {
      type,
      data,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer
    };

    this.suspiciousActivity.push(activity);
    
    console.warn('⚠️ Atividade suspeita detectada:', activity);

    // Envia para o backend (se disponível)
    this.reportToBackend(activity);
  }

  // ========================================
  // REPORTA AO BACKEND
  // ========================================
  async reportToBackend(activity) {
    try {
      await fetch('/api/security/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activity),
        // Não bloqueia se falhar
        keepalive: true
      });
    } catch (error) {
      // Silenciosamente falha - não queremos quebrar a aplicação
      console.debug('Falha ao reportar atividade suspeita:', error);
    }
  }

  // ========================================
  // OBTER RELATÓRIO
  // ========================================
  getSecurityReport() {
    return {
      isBot: this.isBot,
      suspiciousActivityCount: this.suspiciousActivity.length,
      activities: this.suspiciousActivity,
      timestamp: new Date().toISOString()
    };
  }
}

// Exporta instância única
const securitySystem = new SecuritySystem();

// Exporta função para validar formulários
export const validateFormSecurity = (formData) => {
  return securitySystem.validateForm(formData);
};

// Exporta função para obter relatório
export const getSecurityReport = () => {
  return securitySystem.getSecurityReport();
};

export default securitySystem;