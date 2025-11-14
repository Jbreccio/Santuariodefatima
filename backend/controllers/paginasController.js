// backend/controllers/paginasController.js
import sequelize from '../config/database.js';

// 1. SECRETARIA PAROQUIAL
export const getPaginaSecretaria = (req, res) => {
  const dadosSecretaria = {
    forania: "Santo Amaro",
    fundacao: "13/05/1996",
    paroco: "Pe. Giuberto Badiani (Posse: 23/08/2014)",
    endereco: "Rua Darwin, 651 – Santo Amaro - 04741-011 – São Paulo, SP",
    telefone: "11 5521-0312",
    email: "santuarionsradefatima@santoamaro.org.br",
    secretaria: "Rose",
    atendimento: "Terça-Feira à Sexta-Feira das 08h30 às 12h00 e das 13h00 às 17h30 | Sábado das 08h00 às 12h00 e das 13h00 às 17h00"
  };
  res.json(dadosSecretaria);
};

// 2. HORÁRIOS DE MISSAS (ATUALIZADO)
export const getHorarioMissas = (req, res) => {
  const horarios = {
    missas: [
      { dia: "Terça-feira", horarios: ["7h30", "19h30"] },
      { dia: "Quarta-feira", horarios: ["19h30"] },
      { dia: "Quinta-feira", horarios: ["7h30", "19h30"] },
      { dia: "Sexta-feira", horarios: ["19h30"] },
      { dia: "Sábado", horarios: ["16h30"] },
      { dia: "Domingo", horarios: ["8h", "10h", "12h (em espanhol)", "18h30"] }
    ],
    confissoes: "Terça à sexta-feira: uma hora antes das Missas"
  };
  res.json(horarios);
};

// 3. LOCALIZAÇÃO
export const getLocalizacao = (req, res) => {
  const localizacao = {
    endereco: "Rua Darwin, 651 – Santo Amaro, São Paulo - SP, 04741-011",
    mapaUrl: "https://maps.google.com/?q=Rua+Darwin,651,Santo+Amaro,São+Paulo",
    coordenadas: { lat: -23.6500, lng: -46.7200 }
  };
  res.json(localizacao);
};

// 4. CALENDÁRIO LITÚRGICO 2025
export const getCalendario = (req, res) => {
  const eventosAno = [
    // JANEIRO 2025
    { data: "2025-01-01", evento: "Santa Maria, Mãe de Deus", tipo: "solene", cor: "branco" },
    { data: "2025-01-06", evento: "Epifania do Senhor", tipo: "solene", cor: "branco" },
    { data: "2025-01-12", evento: "Batismo do Senhor", tipo: "festa", cor: "branco" },
    
    // FEVEREIRO/MARÇO - QUARESMA 2025
    { data: "2025-03-05", evento: "Quarta-feira de Cinzas", tipo: "liturgico", cor: "roxo" },
    { data: "2025-04-13", evento: "Domingo de Ramos", tipo: "liturgico", cor: "vermelho" },
    { data: "2025-04-17", evento: "Quinta-feira Santa", tipo: "liturgico", cor: "branco" },
    { data: "2025-04-18", evento: "Sexta-feira Santa", tipo: "liturgico", cor: "vermelho" },
    { data: "2025-04-19", evento: "Vigília Pascal", tipo: "solene", cor: "branco" },
    { data: "2025-04-20", evento: "Páscoa da Ressurreição", tipo: "solene", cor: "branco" },
    
    // MAIO 2025 - MÊS DE MARIA
    { data: "2025-05-13", evento: "Festa de Nossa Senhora de Fátima", tipo: "festa", cor: "branco" },
    { data: "2025-05-29", evento: "Ascensão do Senhor", tipo: "solene", cor: "branco" },
    
    // JUNHO 2025
    { data: "2025-06-08", evento: "Pentecostes", tipo: "solene", cor: "vermelho" },
    { data: "2025-06-19", evento: "Corpus Christi", tipo: "solene", cor: "branco" },
    { data: "2025-06-29", evento: "São Pedro e São Paulo", tipo: "solene", cor: "vermelho" },
    
    // AGOSTO 2025
    { data: "2025-08-15", evento: "Assunção de Nossa Senhora", tipo: "solene", cor: "branco" },
    
    // SETEMBRO 2025
    { data: "2025-09-08", evento: "Natividade de Nossa Senhora", tipo: "festa", cor: "branco" },
    
    // OUTUBRO 2025
    { data: "2025-10-04", evento: "São Francisco de Assis", tipo: "festa", cor: "branco" },
    
    // NOVEMBRO 2025
    { data: "2025-11-01", evento: "Todos os Santos", tipo: "solene", cor: "branco" },
    { data: "2025-11-02", evento: "Finados", tipo: "liturgico", cor: "roxo" },
    { data: "2025-11-23", evento: "Cristo Rei", tipo: "solene", cor: "branco" },
    
    // DEZEMBRO 2025 - ADVENTO E NATAL
    { data: "2025-11-30", evento: "1º Domingo do Advento", tipo: "liturgico", cor: "roxo" },
    { data: "2025-12-08", evento: "Imaculada Conceição", tipo: "solene", cor: "branco" },
    { data: "2025-12-24", evento: "Vigília de Natal", tipo: "solene", cor: "branco" },
    { data: "2025-12-25", evento: "Natal do Senhor", tipo: "solene", cor: "branco" },
    { data: "2025-12-28", evento: "Sagrada Família", tipo: "festa", cor: "branco" }
  ];
  res.json(eventosAno);
};

// 5. DIA DOS SANTOS
export const getDiaSantos = (req, res) => {
  const santos = [
    { data: "01/01", santo: "Santa Maria, Mãe de Deus" },
    { data: "06/01", santo: "Santos Reis Magos" },
    { data: "13/05", santo: "Nossa Senhora de Fátima" },
    { data: "15/08", santo: "Assunção de Nossa Senhora" },
    { data: "01/11", santo: "Todos os Santos" },
    { data: "08/12", santo: "Imaculada Conceição" },
    { data: "25/12", santo: "Natal do Senhor" }
  ];
  res.json(santos);
};

// 6. EVENTOS DA DIOCESE
export const getEventosDiocese = (req, res) => {
  const eventosDiocese = [
    // Eventos da Diocese de Santo Amaro - 2025
    { data: "2025-02-08", evento: "Encontro de Formação para Ministros", tipo: "formacao", local: "Cúria Diocesana" },
    { data: "2025-03-22", evento: "Retiro de Quaresma para Jovens", tipo: "retiro", local: "Santuário" },
    { data: "2025-05-17", evento: "Romaria Diocesana a Aparecida", tipo: "romaria", local: "Aparecida do Norte" },
    { data: "2025-06-07", evento: "Festa do Sagrado Coração de Jesus", tipo: "festa", local: "Catedral" },
    { data: "2025-08-09", evento: "Assembleia Diocesana", tipo: "assembleia", local: "Cúria Diocesana" },
    { data: "2025-09-13", evento: "Dia do Catequista", tipo: "formacao", local: "Diocese" },
    { data: "2025-10-12", evento: "Festa de Nossa Senhora Aparecida", tipo: "festa", local: "Todas as Paróquias" },
    { data: "2025-11-15", evento: "Dia do Leigo", tipo: "celebração", local: "Catedral" },
    { data: "2025-12-13", evento: "Encontro de Coroinhas", tipo: "formacao", local: "Santuário" }
  ];
  res.json(eventosDiocese);
};

// 7. PASTORAIS (DO BANCO DE DADOS)
export const getPastoraisMenu = async (req, res) => {
  try {
    const [pastorais] = await sequelize.query('SELECT id, nome FROM pastorais ORDER BY nome');
    res.json(pastorais);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPaginaPastoral = async (req, res) => {
  try {
    const { id } = req.params;
    const [pastorais] = await sequelize.query(
      'SELECT * FROM pastorais WHERE id = $1',
      [id]
    );
    
    if (pastorais.length === 0) {
      return res.status(404).json({ error: 'Pastoral não encontrada' });
    }
    
    res.json(pastorais[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};