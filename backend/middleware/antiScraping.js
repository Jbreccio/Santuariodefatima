// backend/middleware/antiScraping.js
import crypto from 'crypto';

export const antiScraping = (req, res, next) => {
  // Bloqueia user-agents conhecidos de bots
  const blockedUserAgents = [
    'scraping', 'bot', 'crawler', 'spider', 'python', 'curl', 'wget', 'phantomjs'
  ];
  
  const userAgent = req.get('User-Agent') || '';
  
  if (blockedUserAgents.some(agent => userAgent.toLowerCase().includes(agent))) {
    console.warn(`Bot detectado e bloqueado: ${userAgent}`, {
      ip: req.ip,
      timestamp: new Date().toISOString()
    });
    return res.status(403).json({ 
      error: 'Acesso não autorizado',
      code: 'BOT_DETECTED'
    });
  }
  
  // Adiciona delay aleatório para dificultar scraping
  const randomDelay = Math.floor(Math.random() * 100) + 50;
  setTimeout(next, randomDelay);
};

// 🔒 Token de API com expiração
export const generateSecureToken = () => {
  return crypto.randomBytes(32).toString('hex') + Date.now();
};

export default {
  antiScraping,
  generateSecureToken
};