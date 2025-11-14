class AttackDetectionSystem {
  constructor() {
    this.attackPatterns = this.loadAttackPatterns();
    this.suspiciousActivities = [];
    this.startMonitoring();
  }

  // 🎯 PADRÕES DE ATAQUE CONHECIDOS
  loadAttackPatterns() {
    return {
      sqlInjection: /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|EXEC)\b|\-\-|\/\*)/i,
      xss: /(<script|javascript:|onload=|onerror=|onclick=)/i,
      pathTraversal: /(\.\.\/|\.\.\\|\\\.\.|\/\.\.)/,
      commandInjection: /(\b(rm|del|mkdir|chmod|wget|curl)\b|;|\|)/i,
      bruteForce: /(login|password|auth).*(failed|attempt)/i,
      csrf: /(csrf|xsrf|cross.site)/i
    };
  }

  // 🎯 MONITORAMENTO EM TEMPO REAL
  startMonitoring() {
    // Monitora requisições
    this.monitorNetworkRequests();
    
    // Monitora eventos do DOM
    this.monitorDOMEvents();
    
    // Monitora performance (ataques de resource exhaustion)
    this.monitorPerformance();
  }

  // 🎯 MONITORA REQUISIÇÕES DE REDE
  monitorNetworkRequests() {
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
      const startTime = Date.now();
      
      try {
        const response = await originalFetch(...args);
        const endTime = Date.now();
        
        // Detecta padrões suspeitos na URL
        const url = typeof args[0] === 'string' ? args[0] : args[0].url;
        AttackDetectionSystem.analyzeRequest(url, args[1]);
        
        // Detecta tempo de resposta anormal
        if (endTime - startTime > 10000) { // 10 segundos
          AttackDetectionSystem.logSuspiciousActivity('request_timeout', {
            url, duration: endTime - startTime
          });
        }
        
        return response;
      } catch (error) {
        AttackDetectionSystem.logSuspiciousActivity('request_failed', {
          url: args[0], error: error.message
        });
        throw error;
      }
    };
  }

  // 🎯 ANALISA REQUISIÇÕES
  static analyzeRequest(url, options = {}) {
    const analysis = {
      url: url,
      method: options.method || 'GET',
      hasSensitiveData: false,
      detectedPatterns: []
    };

    // Verifica padrões de ataque
    Object.entries(this.attackPatterns).forEach(([pattern, regex]) => {
      if (regex.test(url) || (options.body && regex.test(options.body))) {
        analysis.detectedPatterns.push(pattern);
        this.logSuspiciousActivity(pattern, { url, pattern });
      }
    });

    // Verifica dados sensíveis
    if (options.body) {
      const sensitiveFields = ['password', 'token', 'credit_card', 'cpf'];
      sensitiveFields.forEach(field => {
        if (options.body.includes(field)) {
          analysis.hasSensitiveData = true;
        }
      });
    }

    return analysis;
  }

  // 🎯 MONITORA EVENTOS DO DOM
  monitorDOMEvents() {
    const suspiciousEvents = ['keylog', 'formSubmit', 'inputChange'];
    
    suspiciousEvents.forEach(eventType => {
      document.addEventListener(eventType, (e) => {
        this.analyzeDOMEvent(e);
      });
    });

    // Detecção de keyloggers
    let lastKeyTime = 0;
    document.addEventListener('keydown', (e) => {
      const now = Date.now();
      if (now - lastKeyTime < 10) { // Menos de 10ms entre teclas
        this.logSuspiciousActivity('potential_keylogger', {
          keys: e.key,
          interval: now - lastKeyTime
        });
      }
      lastKeyTime = now;
    });
  }

  // 🎯 MONITORA PERFORMANCE
  monitorPerformance() {
    let requestCount = 0;
    const resetInterval = setInterval(() => {
      if (requestCount > 100) { // Mais de 100 requisições por segundo
        this.logSuspiciousActivity('resource_exhaustion', {
          requestCount,
          timestamp: Date.now()
        });
      }
      requestCount = 0;
    }, 1000);

    // Contador de requisições
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      requestCount++;
      return originalFetch(...args);
    };
  }

  // 🎯 REGISTRA ATIVIDADE SUSPEITA
  static logSuspiciousActivity(type, data) {
    const activity = {
      type,
      data,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    this.suspiciousActivities.push(activity);
    
    // Envia para o backend se for crítico
    if (this.isCriticalActivity(type)) {
      this.reportToBackend(activity);
    }

    // Aciona defesas se necessário
    if (this.suspiciousActivities.length > 5) {
      this.activateDefenseMeasures();
    }
  }

  // 🎯 ATIVA MEDIDAS DEFENSIVAS
  static activateDefenseMeasures() {
    console.warn('🚨 ATIVANDO MEDIDAS DEFENSIVAS');
    
    // Reduz taxa de requisições
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(originalFetch(...args));
        }, Math.random() * 5000); // Atraso aleatório
      });
    };

    // Adiciona CAPTCHA
    this.injectCAPTCHA();
  }

  // 🎯 INJETA CAPTCHA EM CASO DE ATAQUE
  static injectCAPTCHA() {
    const captchaHTML = `
      <div id="security-captcha" style="
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); z-index: 99999; display: flex;
        align-items: center; justify-content: center; color: white;
      ">
        <div style="background: white; padding: 30px; border-radius: 10px; color: black;">
          <h3>Verificação de Segurança</h3>
          <p>Detectamos atividade incomum. Por favor, complete a verificação:</p>
          <input type="text" placeholder="Digite o código de segurança" 
                 style="padding: 10px; margin: 10px 0; width: 200px;">
          <button onclick="document.getElementById('security-captcha').remove()">
            Verificar
          </button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', captchaHTML);
  }

  static isCriticalActivity(type) {
    const criticalActivities = ['sqlInjection', 'xss', 'bruteForce', 'resource_exhaustion'];
    return criticalActivities.includes(type);
  }

  static async reportToBackend(activity) {
    try {
      await fetch('/api/security/attack-detection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activity)
      });
    } catch (error) {
      console.error('Erro ao reportar ataque:', error);
    }
  }
}

export default new AttackDetectionSystem();