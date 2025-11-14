// backend/middleware/validation.js
import { body, validationResult } from 'express-validator';

// Validação de formulário de contato
export const validateContact = [
  body('nome')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nome deve ter entre 2 e 100 caracteres')
    .escape(),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email inválido'),
  
  body('telefone')
    .optional()
    .isLength({ min: 10, max: 15 })
    .withMessage('Telefone deve ter entre 10 e 15 caracteres')
    .matches(/^[\d\s\(\)\-]+$/)
    .withMessage('Telefone contém caracteres inválidos'),
  
  body('mensagem')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Mensagem deve ter entre 10 e 1000 caracteres')
    .escape(),

  // Middleware para verificar erros
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        errors: errors.array().map(err => err.msg) 
      });
    }
    next();
  }
];

// Validação de dados de pastoral
export const validatePastoral = [
  body('nome')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Nome da pastoral deve ter entre 3 e 100 caracteres')
    .escape(),
  
  body('descricao')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Descrição muito longa')
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validação de evento
export const validateEvento = [
  body('titulo')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Título deve ter entre 5 e 200 caracteres')
    .escape(),
  
  body('data_evento')
    .isISO8601()
    .withMessage('Data do evento inválida'),
  
  body('local')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Local muito longo')
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Sanitização geral dos dados
export const sanitizeData = (req, res, next) => {
  // Remove espaços em branco extras
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = req.body[key].trim();
      }
    });
  }
  next();
};