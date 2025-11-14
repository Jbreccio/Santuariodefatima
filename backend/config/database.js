import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Determina o host baseado no ambiente
const getDbHost = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.DB_HOST || 'postgres-service'; // Kubernetes
  }
  return process.env.DB_HOST || 'localhost'; // Desenvolvimento
};

const sequelize = new Sequelize(
  process.env.DB_NAME || 'snsf_db',
  process.env.DB_USER || 'postgres', 
  process.env.DB_PASSWORD || 'santuario123',
  {
    host: getDbHost(),
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
    
    // Sincronizar modelos (apenas em desenvolvimento)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ Modelos sincronizados!');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar com PostgreSQL:', error.message);
    return false;
  }
};

export default sequelize;