// backend/routes/contatoroutes.js
import express from 'express';
import { contatoController } from '../controllers/contatoController.js';

const router = express.Router();

// Rota principal - enviar contato
router.post('/contato', contatoController.enviarContato);

// Rota para listar contatos (admin)
router.get('/contatos', contatoController.listarContatos);

export default router;