// backend/middleware/advancedSecurity.js
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';

// 🔒 Rate Limiting Militar
export const militaryRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máx 100 requests por IP
  message: { error: 'Muitas requisições detectadas' },
  skipSuccessfulRequests: true,
});

// 🔒 Prevenção contra SQL Injection
export const sqlInjectionProtection = (req, res, next) => {
  const sqlKeywords = /(\b(SELECT|INSERT|DELETE|UPDATE|DROP|UNION|EXEC)\b)/i;
  
  // Verifica body, query params e headers
  const checkObject = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === 'string' && sqlKeywords.test(obj[key])) {
        return res.status(400).json({ error: 'Requisição suspeita detectada' });
      }
    }
  };
  
  checkObject(req.body);
  checkObject(req.query);
  checkObject(req.params);
  
  next();
};

// 🔒 Hash SHA256 para dados sensíveis
export const encryptData = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};