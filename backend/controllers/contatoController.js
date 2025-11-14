// backend/controllers/contatoController.js
import { Contact } from '../models/Contact.js';
import { validationResult } from 'express-validator';

export const contatoController = {
  // ✉️ ENVIAR CONTATO (CREATE)
  async enviarContato(req, res) {
    try {
      // Validação com express-validator (se estiver usando)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: 'Dados inválidos',
          details: errors.array()
        });
      }

      const { nome, telefone, email, mensagem, tipo = 'contato' } = req.body;

      console.log('📧 Recebendo contato:', { nome, telefone, email });

      // Validação manual
      if (!nome || !telefone || !email || !mensagem) {
        return res.status(400).json({
          success: false,
          error: 'Todos os campos são obrigatórios',
          fields: ['nome', 'telefone', 'email', 'mensagem']
        });
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Email inválido'
        });
      }

      // Validação de telefone (básica)
      const telefoneClean = telefone.replace(/\D/g, '');
      if (telefoneClean.length < 10 || telefoneClean.length > 11) {
        return res.status(400).json({
          success: false,
          error: 'Telefone inválido. Use formato: (XX) XXXXX-XXXX'
        });
      }

      // Criar contato no banco
      const novoContato = await Contact.create({
        nome: nome.trim(),
        telefone: telefoneClean,
        email: email.trim().toLowerCase(),
        mensagem: mensagem.trim(),
        tipo,
        status: 'recebido',
        origem: 'site',
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.headers['user-agent']
      });

      console.log('✅ Contato salvo no banco - ID:', novoContato.id);

      // TODO: Enviar email de notificação para admin
      // await enviarEmailNotificacao(novoContato);

      // TODO: Enviar email de confirmação para usuário
      // await enviarEmailConfirmacao(novoContato);

      // Resposta de sucesso
      res.status(201).json({
        success: true,
        message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
        data: {
          id: novoContato.id,
          nome: novoContato.nome,
          email: novoContato.email,
          timestamp: novoContato.createdAt
        }
      });

    } catch (error) {
      console.error('❌ Erro ao salvar contato:', error);
      
      // Tratar erros de validação do Sequelize
      if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map(err => ({
          field: err.path,
          message: err.message
        }));
        return res.status(400).json({
          success: false,
          error: 'Dados inválidos',
          details: errors
        });
      }

      // Tratar erro de unique constraint (email duplicado)
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({
          success: false,
          error: 'Já existe um contato com este email'
        });
      }

      res.status(500).json({
        success: false,
        error: 'Erro interno do servidor. Tente novamente em alguns instantes.'
      });
    }
  },

  // 📋 LISTAR CONTATOS (READ - para admin)
  async listarContatos(req, res) {
    try {
      const { 
        status, 
        tipo,
        page = 1, 
        limit = 50,
        search,
        orderBy = 'createdAt',
        order = 'DESC'
      } = req.query;
      
      // Construir filtros
      const where = {};
      if (status) where.status = status;
      if (tipo) where.tipo = tipo;
      
      // Busca por nome ou email
      if (search) {
        where[Op.or] = [
          { nome: { [Op.iLike]: `%${search}%` } },
          { email: { [Op.iLike]: `%${search}%` } }
        ];
      }

      // Paginação
      const offset = (parseInt(page) - 1) * parseInt(limit);

      const { count, rows: contatos } = await Contact.findAndCountAll({
        where,
        order: [[orderBy, order]],
        limit: parseInt(limit),
        offset,
        attributes: { exclude: ['userAgent', 'ip'] } // Não enviar dados sensíveis
      });

      res.json({
        success: true,
        data: contatos,
        pagination: {
          total: count,
          page: parseInt(page),
          limit: parseInt(limit),
          totalPages: Math.ceil(count / parseInt(limit))
        }
      });

    } catch (error) {
      console.error('❌ Erro ao listar contatos:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao buscar contatos'
      });
    }
  },

  // 🔍 BUSCAR CONTATO POR ID
  async buscarContato(req, res) {
    try {
      const { id } = req.params;

      // Validar se ID é número
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'ID inválido'
        });
      }

      const contato = await Contact.findByPk(id);
      
      if (!contato) {
        return res.status(404).json({
          success: false,
          error: 'Contato não encontrado'
        });
      }

      res.json({
        success: true,
        data: contato
      });

    } catch (error) {
      console.error('❌ Erro ao buscar contato:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao buscar contato'
      });
    }
  },

  // 🔄 ATUALIZAR STATUS DO CONTATO
  async atualizarStatus(req, res) {
    try {
      const { id } = req.params;
      const { status, observacao } = req.body;

      // Validar status
      const statusValidos = ['recebido', 'em_analise', 'respondido', 'arquivado'];
      if (!statusValidos.includes(status)) {
        return res.status(400).json({
          success: false,
          error: 'Status inválido',
          statusValidos
        });
      }

      const contato = await Contact.findByPk(id);
      
      if (!contato) {
        return res.status(404).json({
          success: false,
          error: 'Contato não encontrado'
        });
      }

      // Atualizar contato
      await contato.update({ 
        status,
        observacao: observacao || contato.observacao,
        respondidoEm: status === 'respondido' ? new Date() : contato.respondidoEm
      });
      
      console.log(`✅ Status do contato ${id} atualizado para: ${status}`);

      res.json({
        success: true,
        message: `Status atualizado para: ${status}`,
        data: contato
      });

    } catch (error) {
      console.error('❌ Erro ao atualizar status:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao atualizar status'
      });
    }
  },

  // 🗑️ DELETAR CONTATO (soft delete)
  async deletarContato(req, res) {
    try {
      const { id } = req.params;

      const contato = await Contact.findByPk(id);
      
      if (!contato) {
        return res.status(404).json({
          success: false,
          error: 'Contato não encontrado'
        });
      }

      // Soft delete (se o modelo suportar paranoid)
      await contato.destroy();
      
      console.log(`🗑️ Contato ${id} deletado`);

      res.json({
        success: true,
        message: 'Contato removido com sucesso'
      });

    } catch (error) {
      console.error('❌ Erro ao deletar contato:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao deletar contato'
      });
    }
  },

  // 📊 ESTATÍSTICAS DE CONTATOS
  async estatisticas(req, res) {
    try {
      const [
        total,
        recebidos,
        emAnalise,
        respondidos,
        arquivados
      ] = await Promise.all([
        Contact.count(),
        Contact.count({ where: { status: 'recebido' } }),
        Contact.count({ where: { status: 'em_analise' } }),
        Contact.count({ where: { status: 'respondido' } }),
        Contact.count({ where: { status: 'arquivado' } })
      ]);

      // Contatos por tipo
      const porTipo = await Contact.findAll({
        attributes: [
          'tipo',
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        group: ['tipo']
      });

      res.json({
        success: true,
        data: {
          total,
          porStatus: {
            recebidos,
            emAnalise,
            respondidos,
            arquivados
          },
          porTipo: porTipo.reduce((acc, item) => {
            acc[item.tipo] = item.dataValues.count;
            return acc;
          }, {})
        }
      });

    } catch (error) {
      console.error('❌ Erro ao buscar estatísticas:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao buscar estatísticas'
      });
    }
  }
};

// 📧 Função auxiliar para enviar email (implementar com nodemailer)
async function enviarEmailNotificacao(contato) {
  // TODO: Implementar com nodemailer
  console.log('📧 Email de notificação enviado para admin');
}

async function enviarEmailConfirmacao(contato) {
  // TODO: Implementar com nodemailer
  console.log('📧 Email de confirmação enviado para:', contato.email);
}