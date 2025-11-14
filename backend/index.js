// backend/index.js
import express from 'express';
import cors from 'cors';
import { 
  apiLimiter, 
  authLimiter, 
  corsOptions, 
  securityHeaders 
} from './middleware/security.js';
import { sanitizeData } from './middleware/validation.js';

// 🛡️ NOVOS MIDDLEWARES DE SEGURANÇA AVANÇADA
import { 
  militaryRateLimit, 
  sqlInjectionProtection,
  encryptData 
} from './middleware/advancedSecurity.js';
import { 
  antiScraping,
  generateSecureToken 
} from './middleware/antiScraping.js';
import { 
  sessionSecurity 
} from './middleware/sessionSecurity.js';

// Importar rotas
import pastoraisRoutes from './routes/pastorais.js';
import eventosRoutes from './routes/eventos.js';
import noticiasRoutes from './routes/noticias.js';
import emailRoutes from './routes/email.js';
import paginasRoutes from './routes/paginas.js';

const app = express();

// 🛡️ CAMADA 1: SEGURANÇA DE SESSÃO E HEADERS
app.use(sessionSecurity);
app.use(securityHeaders);
app.use(cors(corsOptions));

// 🛡️ CAMADA 2: PROTEÇÃO CONTRA ATAQUES
app.use(antiScraping);
app.use(sqlInjectionProtection);

// 🛡️ CAMADA 3: VALIDAÇÃO E SANITIZAÇÃO
app.use(express.json({ limit: '10mb' }));
app.use(sanitizeData);

// 🛡️ CAMADA 4: RATE LIMITING MILITAR
app.use(militaryRateLimit);
app.use(apiLimiter);

// 🛡️ ROTA DE HEALTH CHECK COM TOKEN SEGURO
app.get('/', (req, res) => {
  const secureToken = generateSecureToken();
  
  res.json({ 
    message: '🚀 API do Santuário de Fátima Online!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    security: {
      level: 'military',
      token: encryptData(secureToken),
      checksum: encryptData(`${secureToken}${Date.now()}`)
    }
  });
});

// 🛡️ RATE LIMITING ESPECÍFICO PARA ROTAS SENSÍVEIS
app.use('/api/email', authLimiter);

// 🛡️ ROTAS DA API COM PROTEÇÃO
app.use('/api/pastorais', pastoraisRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/paginas', paginasRoutes);
app.use('/api/email', emailRoutes);

// 🛡️ MIDDLEWARE PARA ROTAS NÃO ENCONTRADAS
app.use('*', (req, res) => {
  // Log da tentativa de acesso a rota inexistente
  console.warn(`Tentativa de acesso a rota não existente: ${req.originalUrl}`, {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    timestamp: new Date().toISOString()
  });
  
  res.status(404).json({ 
    error: 'Endpoint não encontrado',
    code: 'ENDPOINT_NOT_FOUND'
  });
});

// 🛡️ MIDDLEWARE DE ERRO GLOBAL FORTALECIDO
app.use((error, req, res, next) => {
  console.error('🚨 ERRO NO SERVIDOR:', {
    message: error.message,
    stack: error.stack,
    url: req.originalUrl,
    ip: req.ip,
    timestamp: new Date().toISOString()
  });
  
  // Não revela detalhes do erro em produção
  const errorResponse = {
    error: 'Erro interno do servidor',
    code: 'INTERNAL_SERVER_ERROR'
  };
  
  if (process.env.NODE_ENV === 'development') {
    errorResponse.details = error.message;
    errorResponse.stack = error.stack;
  }
  
  res.status(500).json(errorResponse);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🛡️  Backend MILITAR rodando na porta ${PORT}`);
  console.log(`🔒 Camadas de segurança ativas:`);
  console.log(`   ✅ Session Security`);
  console.log(`   ✅ Anti-Scraping`);
  console.log(`   ✅ SQL Injection Protection`);
  console.log(`   ✅ Military Rate Limiting`);
  console.log(`   ✅ Data Encryption`);
  console.log(`   ✅ Secure Headers`);
});