// backend/controllers/eventosController.js
import sequelize from '../config/database.js';

export const getEventos = async (req, res) => {
  try {
    const [eventos] = await sequelize.query(`
      SELECT * FROM eventos 
      WHERE data_evento >= NOW() 
      ORDER BY data_evento ASC
    `);
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEventosPassados = async (req, res) => {
  try {
    const [eventos] = await sequelize.query(`
      SELECT * FROM eventos 
      WHERE data_evento < NOW() 
      ORDER BY data_evento DESC
      LIMIT 10
    `);
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};