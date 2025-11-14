import CryptoJS from 'crypto-js';

class BlinderProtocol {
  constructor() {
    this.sessionKey = this.generateSessionKey();
  }

  generateSessionKey() {
    return CryptoJS.SHA256(
      Date.now().toString() + 
      Math.random().toString() + 
      navigator.userAgent
    ).toString();
  }

  enableConsoleProtection() {
    if (typeof window === 'undefined') return;

    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn
    };

    // Bloqueia logs sensíveis
    console.log = function(...args) {
      const sensitive = ['password', 'token', 'secret', 'key', 'hash'];
      if (args.some(arg => 
        typeof arg === 'string' && 
        sensitive.some(s => arg.toLowerCase().includes(s))
      )) {
        originalConsole.warn('🚫 Log bloqueado por segurança');
        return;
      }
      originalConsole.log.apply(console, args);
    };
  }

  enableDevToolsDetection() {
    if (typeof window === 'undefined') return;

    setInterval(() => {
      const widthThreshold = window.outerWidth - window.innerWidth > 200;
      const heightThreshold = window.outerHeight - window.innerHeight > 200;
      
      if (widthThreshold || heightThreshold) {
        document.body.innerHTML = '<h1>🚫 Ferramentas de desenvolvimento detectadas</h1>';
      }
    }, 1000);
  }

  // 🔐 PROTEÇÃO DE DADOS
  protectData(data) {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data), 
      this.sessionKey
    ).toString();
    
    const hash = CryptoJS.SHA256(encrypted + this.sessionKey).toString();
    
    return {
      encrypted: encrypted,
      hash: hash,
      session: this.sessionKey.substring(0, 16),
      timestamp: Date.now()
    };
  }
}

export default new BlinderProtocol();