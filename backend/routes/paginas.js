// backend/routes/paginas.js
import express from 'express';
import { 
  getPaginaSecretaria, 
  getHorarioMissas, 
  getLocalizacao, 
  getCalendario, 
  getDiaSantos,
  getPastoraisMenu,
  getPaginaPastoral,
  getEventosDiocese
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/secretaria', getPaginaSecretaria);
router.get('/horario-missas', getHorarioMissas);
router.get('/localizacao', getLocalizacao);
router.get('/calendario', getCalendario);
router.get('/santos', getDiaSantos);
router.get('/pastorais', getPastoraisMenu);
router.get('/pastoral/:id', getPaginaPastoral);
router.get('/eventos-diocese', getEventosDiocese);

export default router;