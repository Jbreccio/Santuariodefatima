// backend/middleware/sessionSecurity.js
export const sessionSecurity = (req, res, next) => {
  // Headers de segurança
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
  // Remove headers sensíveis
  res.removeHeader('X-Powered-By');
  res.removeHeader('Server');
  
  next();
};