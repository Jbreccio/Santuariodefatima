import CryptoJS from 'crypto-js';

class ReactShield {
  constructor() {
    this.encryptionKey = 'santuario-shield-2025';
  }

  enableInspectionProtection() {
    if (typeof window === 'undefined') return;

    // Bloqueio TOTAL
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.triggerSecurityAlert();
      return false;
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') || 
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        this.triggerSecurityAlert();
        return false;
      }
    });

    // Bloqueia copy/paste
    ['copy', 'cut', 'paste'].forEach(event => {
      document.addEventListener(event, (e) => {
        if (!this.isFormElement(e.target)) {
          e.preventDefault();
          this.triggerSecurityAlert();
          return false;
        }
      });
    });
  }

  // 🔐 CRIPTOGRAFIA AVANÇADA
  encryptData(data) {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    return CryptoJS.AES.encrypt(data, this.encryptionKey).toString();
  }

  decryptData(encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      return null;
    }
  }

  // 🔐 SHA256 AVANÇADO
  generateHash(data) {
    const timestamp = Date.now();
    const randomSalt = Math.random().toString(36).substring(7);
    const dataToHash = data + timestamp + randomSalt;
    
    return {
      hash: CryptoJS.SHA256(dataToHash).toString(),
      timestamp: timestamp,
      salt: randomSalt
    };
  }

  triggerSecurityAlert() {
    console.warn('🚨 Ação bloqueada por segurança');
  }

  isFormElement(element) {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
  }
}

export default new ReactShield();