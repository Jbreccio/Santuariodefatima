const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const crypto = require('crypto');

// Rate Limiting bancário
const bankingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Máximo 5 tentativas
  message: {
    error: 'Muitas tentativas. Tente novamente em 15 minutos.',
    code: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Criptografia SHA256 para dados sensíveis
const encryptData = (data) => {
  const cipher = crypto.createCipher('aes-256-gcm', process.env.ENCRYPTION_KEY);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    data: encrypted,
    authTag: cipher.getAuthTag().toString('hex')
  };
};

// Headers de segurança bancária
const bankingSecurityHeaders = (req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'");
  next();
};

module.exports = { bankingLimiter, encryptData, bankingSecurityHeaders };