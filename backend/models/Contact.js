// backend/models/Contact.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(20),
    defaultValue: 'contato'
  },
  status: {
    type: DataTypes.STRING(20),
    defaultValue: 'recebido'
  }
}, {
  tableName: 'contatos',
  timestamps: true
});

console.log(' Model Contact criado!');