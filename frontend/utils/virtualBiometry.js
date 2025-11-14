class VirtualBiometry {
  constructor() {
    this.userFingerprint = null;
  }

  // 🎯 CRIA IMPRESSÃO DIGITAL DIGITAL DO USUÁRIO
  generateUserFingerprint() {
    const fingerprint = {
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      hardwareConcurrency: navigator.hardwareConcurrency,
      deviceMemory: navigator.deviceMemory,
      touchSupport: 'ontouchstart' in window,
      cookiesEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack,
      timestamp: Date.now()
    };

    const fingerprintHash = CryptoJS.SHA256(JSON.stringify(fingerprint)).toString();
    this.userFingerprint = fingerprintHash;
    
    return {
      fingerprint: fingerprintHash,
      data: fingerprint
    };
  }

  // 🎯 DETECÇÃO DE COMPORTAMENTO SUSPEITO
  monitorUserBehavior() {
    let lastActivity = Date.now();
    let suspiciousActions = 0;

    const activities = ['mousemove', 'click', 'keypress', 'scroll'];
    
    activities.forEach(activity => {
      document.addEventListener(activity, () => {
        const now = Date.now();
        const timeDiff = now - lastActivity;
        
        // Detecção de bot (atividades muito rápidas)
        if (timeDiff < 50) {
          suspiciousActions++;
          this.triggerSuspiciousActivity('Atividade muito rápida detectada');
        }
        
        // Detecção de macro (padrões repetitivos)
        if (suspiciousActions > 10) {
          this.triggerSuspiciousActivity('Padrão de automação detectado');
        }
        
        lastActivity = now;
      });
    });
  }

  // 🎯 VERIFICAÇÃO DE AMBIENTE SEGURO
  checkSecureEnvironment() {
    const checks = {
      isDevToolsOpen: this.detectDevTools(),
      isUsingVPN: this.detectVPN(),
      isIncognito: this.detectIncognito(),
      hasExtensions: this.detectExtensions(),
      screenResolution: this.checkScreenResolution()
    };

    const riskScore = Object.values(checks).filter(Boolean).length;
    
    if (riskScore > 2) {
      this.triggerSecurityLockdown('Ambiente de alto risco detectado');
    }

    return checks;
  }

  // 🎯 DETECÇÃO DE FERRAMENTAS DE DESENVOLVIMENTO
  detectDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > 200;
    const heightThreshold = window.outerHeight - window.innerHeight > 200;
    
    return widthThreshold || heightThreshold;
  }

  // 🎯 DETECÇÃO DE MODO ANÔNIMO
  detectIncognito() {
    return new Promise((resolve) => {
      const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
      if (!fs) {
        resolve(false);
        return;
      }
      
      fs(window.TEMPORARY, 100, () => resolve(false), () => resolve(true));
    });
  }

  triggerSuspiciousActivity(reason) {
    console.warn(`🚨 ATIVIDADE SUSPEITA: ${reason}`);
    
    // Notifica o backend
    fetch('/api/security/alert', {
      method: 'POST',
      body: JSON.stringify({
        type: 'suspicious_activity',
        reason: reason,
        fingerprint: this.userFingerprint,
        timestamp: Date.now()
      })
    });
  }

  triggerSecurityLockdown(reason) {
    document.body.innerHTML = `
      <div style="
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: #000; color: #fff; display: flex; align-items: center;
        justify-content: center; flex-direction: column; z-index: 99999;
        font-family: Arial, sans-serif; text-align: center;
      ">
        <h1 style="color: #ff4444; font-size: 24px;">🚨 BLOQUEIO DE SEGURANÇA</h1>
        <p style="font-size: 16px; margin: 20px 0;">${reason}</p>
        <p style="font-size: 14px; opacity: 0.8;">
          Por favor, entre em contato com o suporte técnico.
        </p>
      </div>
    `;
    
    throw new Error(`SECURITY_LOCKDOWN: ${reason}`);
  }
}

export default new VirtualBiometry();