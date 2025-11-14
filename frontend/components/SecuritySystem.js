// components/SecuritySystem.js - Versão Corrigida
import { useEffect, useState } from 'react';

const SecuritySystem = ({ enableStrictMode = false }) => {
  const [securityStatus, setSecurityStatus] = useState('initializing');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // 🛡️ SISTEMA DE SEGURANÇA DO SANTUÁRIO
    if (!isClient) return;

    // ========================================
    // 1. FINGERPRINT DO USUÁRIO (não invasivo)
    // ========================================
    const generateFingerprint = () => {
      try {
        // Verifica se estamos no navegador
        if (typeof window === 'undefined' || typeof screen === 'undefined') {
          return null;
        }

        const data = {
          screen: `${screen.width}x${screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          platform: navigator.platform,
          timestamp: Date.now()
        };

        const fingerprint = btoa(JSON.stringify(data));
        sessionStorage.setItem('session_id', fingerprint);
        
        return fingerprint;
      } catch (error) {
        console.error('Erro ao gerar fingerprint:', error);
        return null;
      }
    };

    // ========================================
    // 2. PROTEÇÃO CONTRA CLIQUE-DIREITO (opcional)
    // ========================================
    const protectContent = () => {
      if (!enableStrictMode) return;

      // Desabilita menu de contexto
      const handleContextMenu = (e) => {
        e.preventDefault();
        console.log('🛡️ Menu de contexto desabilitado');
      };

      // Desabilita teclas perigosas
      const handleKeyDown = (e) => {
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
          (e.ctrlKey && e.key === 'U')
        ) {
          e.preventDefault();
          console.log('🛡️ Tecla de desenvolvedor bloqueada');
        }
      };

      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
      };
    };

    // ========================================
    // 3. DETECÇÃO DE BOTS (leve)
    // ========================================
    const detectBot = () => {
      const botIndicators = [];

      // Verifica user agent
      const ua = navigator.userAgent.toLowerCase();
      if (/bot|crawler|spider|scraper/i.test(ua)) {
        botIndicators.push('suspicious_user_agent');
      }

      // Verifica WebDriver
      if (navigator.webdriver === true) {
        botIndicators.push('webdriver_detected');
      }

      return botIndicators;
    };

    // ========================================
    // 4. MONITORAMENTO DE ATIVIDADE SUSPEITA
    // ========================================
    const monitorActivity = () => {
      let rapidClicks = 0;
      let clickTimer = null;

      const handleClick = () => {
        rapidClicks++;
        
        if (clickTimer) clearTimeout(clickTimer);
        
        clickTimer = setTimeout(() => {
          if (rapidClicks > 30) {
            logSuspiciousActivity('excessive_rapid_clicks', { count: rapidClicks });
          }
          rapidClicks = 0;
        }, 1000);
      };

      // Monitora tentativas de cópia em massa
      const handleCopy = (e) => {
        const selection = window.getSelection().toString();
        
        if (selection.length > 2000) {
          logSuspiciousActivity('large_content_copy', { 
            length: selection.length 
          });
        }
      };

      document.addEventListener('click', handleClick);
      document.addEventListener('copy', handleCopy);

      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('copy', handleCopy);
      };
    };

    // ========================================
    // 5. PROTEÇÃO CONTRA IFRAME HIJACKING
    // ========================================
    const preventFrameHijacking = () => {
      if (window.self !== window.top) {
        console.warn('⚠️ Site sendo exibido em iframe - Redirecionando...');
        window.top.location = window.location;
      }
    };

    // ========================================
    // 6. DETECÇÃO DE DEVTOOLS (não invasivo)
    // ========================================
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      return widthThreshold || heightThreshold;
    };

    // ========================================
    // 7. LOG DE ATIVIDADES SUSPEITAS
    // ========================================
    const logSuspiciousActivity = async (type, data = {}) => {
      const activity = {
        type,
        data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        sessionId: sessionStorage.getItem('session_id')
      };

      console.warn('⚠️ Atividade suspeita:', activity);

      // Envia para backend (silenciosamente)
      try {
        await fetch('/api/security/log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(activity),
          keepalive: true
        }).catch(() => {}); // Ignora erros
      } catch (error) {
        // Silenciosamente falha
      }
    };

    // ========================================
    // 8. PROTEÇÃO DE FORMULÁRIOS
    // ========================================
    const protectForms = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        const timestamp = document.createElement('input');
        timestamp.type = 'hidden';
        timestamp.name = '_form_start_time';
        timestamp.value = Date.now().toString();
        form.appendChild(timestamp);

        // Valida tempo de preenchimento
        const handleSubmit = (e) => {
          const startTime = parseInt(timestamp.value);
          const timeTaken = Date.now() - startTime;
          
          // Menos de 2 segundos = suspeito
          if (timeTaken < 2000) {
            logSuspiciousActivity('form_submitted_too_fast', { 
              timeTaken 
            });
          }
        };

        form.addEventListener('submit', handleSubmit);
      });
    };

    // ========================================
    // 9. VERIFICAÇÃO PERIÓDICA
    // ========================================
    const startPeriodicChecks = () => {
      const interval = setInterval(() => {
        // Verifica DevTools
        if (detectDevTools()) {
          console.warn('🛡️ DevTools detectado');
        }

        // Verifica fingerprint
        if (!sessionStorage.getItem('session_id')) {
          generateFingerprint();
        }
      }, 10000); // A cada 10 segundos

      return interval;
    };

    // ========================================
    // 10. INICIALIZAÇÃO
    // ========================================
    const initialize = () => {
      try {
        console.log('🛡️ Inicializando sistema de segurança...');

        // Executa proteções
        generateFingerprint();
        preventFrameHijacking();
        
        const cleanupFunctions = [];
        
        // Adiciona listeners e guarda funções de cleanup
        cleanupFunctions.push(monitorActivity());
        
        if (enableStrictMode) {
          cleanupFunctions.push(protectContent());
        }

        // Detecta bots
        const botIndicators = detectBot();
        if (botIndicators.length > 0) {
          logSuspiciousActivity('bot_indicators_detected', { 
            indicators: botIndicators 
          });
        }

        // Protege formulários após um delay
        setTimeout(protectForms, 1000);

        // Inicia verificações periódicas
        const interval = startPeriodicChecks();

        setSecurityStatus('active');
        console.log('✅ Sistema de segurança ativo');

        // Função de cleanup
        return () => {
          cleanupFunctions.forEach(cleanup => {
            if (typeof cleanup === 'function') cleanup();
          });
          clearInterval(interval);
        };
      } catch (error) {
        console.error('❌ Erro ao inicializar segurança:', error);
        setSecurityStatus('error');
      }
    };

    // Inicializar e limpar ao desmontar
    const cleanup = initialize();
    return cleanup;
  }, [isClient, enableStrictMode]);

  // Componente invisível - não renderiza nada
  return null;
};

export default SecuritySystem;