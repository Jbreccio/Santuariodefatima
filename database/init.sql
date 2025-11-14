-- ========================================
-- Script de Inicialização do Banco de Dados
-- Santuário Nossa Senhora de Fátima
-- ========================================

-- ========================================
-- TABELA: PASTORAIS
-- ========================================
CREATE TABLE IF NOT EXISTS pastorais (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  responsavel VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(20),
  ativa BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para pastorais
CREATE INDEX IF NOT EXISTS idx_pastorais_ativa ON pastorais(ativa);

-- ========================================
-- TABELA: EVENTOS
-- ========================================
CREATE TABLE IF NOT EXISTS eventos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  descricao TEXT,
  data_evento TIMESTAMP NOT NULL,
  data_fim TIMESTAMP,
  local VARCHAR(200),
  imagem_url VARCHAR(500),
  tipo VARCHAR(50) DEFAULT 'evento',
  ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT check_tipo_evento CHECK (tipo IN ('missa', 'evento', 'retiro', 'festa', 'reuniao', 'curso'))
);

-- Índices para eventos
CREATE INDEX IF NOT EXISTS idx_eventos_data ON eventos(data_evento DESC);
CREATE INDEX IF NOT EXISTS idx_eventos_ativo ON eventos(ativo);
CREATE INDEX IF NOT EXISTS idx_eventos_tipo ON eventos(tipo);

-- ========================================
-- TABELA: NOTÍCIAS
-- ========================================
CREATE TABLE IF NOT EXISTS noticias (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  conteudo TEXT,
  resumo TEXT,
  imagem_url VARCHAR(500),
  autor VARCHAR(100),
  publicado BOOLEAN DEFAULT FALSE,
  destaque BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_publicacao TIMESTAMP
);

-- Índices para notícias
CREATE INDEX IF NOT EXISTS idx_noticias_publicado ON noticias(publicado);
CREATE INDEX IF NOT EXISTS idx_noticias_destaque ON noticias(destaque);
CREATE INDEX IF NOT EXISTS idx_noticias_data_pub ON noticias(data_publicacao DESC);

-- ========================================
-- TABELA: CONTATOS (Formulário Secretaria)
-- ========================================
CREATE TABLE IF NOT EXISTS contatos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  assunto VARCHAR(100) NOT NULL,
  mensagem TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pendente',
  respondido BOOLEAN DEFAULT FALSE,
  resposta TEXT,
  data_resposta TIMESTAMP,
  data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT check_status_contato CHECK (status IN ('pendente', 'em_andamento', 'resolvido', 'arquivado'))
);

-- Índices para contatos
CREATE INDEX IF NOT EXISTS idx_contatos_data_envio ON contatos(data_envio DESC);
CREATE INDEX IF NOT EXISTS idx_contatos_status ON contatos(status);
CREATE INDEX IF NOT EXISTS idx_contatos_respondido ON contatos(respondido);
CREATE INDEX IF NOT EXISTS idx_contatos_assunto ON contatos(assunto);

-- ========================================
-- TABELA: USUÁRIOS (Sistema Administrativo)
-- ========================================
CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  tipo VARCHAR(50) DEFAULT 'usuario',
  ativo BOOLEAN DEFAULT TRUE,
  ultimo_acesso TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT check_tipo_usuario CHECK (tipo IN ('admin', 'secretaria', 'pastoral', 'usuario'))
);

-- Índices para usuários
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_usuarios_tipo ON usuarios(tipo);
CREATE INDEX IF NOT EXISTS idx_usuarios_ativo ON usuarios(ativo);

-- ========================================
-- TABELA: HORÁRIOS DE MISSA
-- ========================================
CREATE TABLE IF NOT EXISTS horarios_missa (
  id SERIAL PRIMARY KEY,
  dia_semana VARCHAR(20) NOT NULL,
  horario TIME NOT NULL,
  tipo VARCHAR(50) DEFAULT 'missa',
  observacao TEXT,
  ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT check_dia_semana CHECK (dia_semana IN ('domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'))
);

-- ========================================
-- INSERIR DADOS INICIAIS
-- ========================================

-- Pastorais
INSERT INTO pastorais (nome, descricao, responsavel) VALUES
  ('Pastoral do Batismo', 'Preparação para o sacramento do batismo', 'Pe. Giuberto Badiani'),
  ('Pastoral dos Noivos', 'Preparação matrimonial para casais', NULL),
  ('Pastoral da Juventude', 'Evangelização e formação dos jovens', NULL),
  ('Pastoral do Dízimo', 'Administração e educação sobre o dízimo', NULL),
  ('Pastoral da Comunicação - PASCOM', 'Comunicação e divulgação das ações paroquiais', NULL),
  ('Pastoral da Catequese', 'Formação catequética de crianças e adolescentes', NULL),
  ('Pastoral da Liturgia', 'Organização e coordenação das celebrações litúrgicas', NULL),
  ('Pastoral da Caridade', 'Ações sociais e assistenciais', NULL)
ON CONFLICT DO NOTHING;

-- Horários de Missa
INSERT INTO horarios_missa (dia_semana, horario, tipo, observacao) VALUES
  ('domingo', '08:00:00', 'missa', 'Missa Dominical'),
  ('domingo', '10:00:00', 'missa', 'Missa com crianças'),
  ('domingo', '19:00:00', 'missa', 'Missa Vespertina'),
  ('segunda', '19:00:00', 'missa', NULL),
  ('terca', '19:00:00', 'missa', NULL),
  ('quarta', '19:00:00', 'missa', NULL),
  ('quinta', '19:00:00', 'missa', NULL),
  ('sexta', '19:00:00', 'missa', NULL),
  ('sabado', '18:00:00', 'missa', 'Missa de Sábado'),
  ('sabado', '09:00:00', 'confissao', 'Confissões')
ON CONFLICT DO NOTHING;

-- Usuário Admin (senha: admin123 - MUDE EM PRODUÇÃO!)
-- Hash gerado com bcrypt rounds=10
INSERT INTO usuarios (nome, email, senha_hash, tipo) VALUES
  ('Administrador', 'admin@santuario.com', '$2b$10$YourHashHere', 'admin'),
  ('Secretaria', 'secretaria@santuario.com', '$2b$10$YourHashHere', 'secretaria')
ON CONFLICT (email) DO NOTHING;

-- Notícia de exemplo
INSERT INTO noticias (titulo, conteudo, resumo, publicado, destaque) VALUES
  (
    'Bem-vindo ao Santuário Nossa Senhora de Fátima',
    'Estamos felizes em recebê-lo em nossa comunidade. Participe de nossas celebrações e atividades pastorais.',
    'Conheça nossa comunidade e participe das atividades',
    TRUE,
    TRUE
  )
ON CONFLICT DO NOTHING;

-- Evento de exemplo
INSERT INTO eventos (titulo, descricao, data_evento, local, tipo) VALUES
  (
    'Missa Dominical',
    'Celebração da Santa Missa todos os domingos',
    CURRENT_TIMESTAMP + INTERVAL '7 days',
    'Igreja Matriz',
    'missa'
  )
ON CONFLICT DO NOTHING;

-- ========================================
-- FUNÇÕES AUXILIARES
-- ========================================

-- Função para atualizar campo updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
DROP TRIGGER IF EXISTS update_pastorais_updated_at ON pastorais;
CREATE TRIGGER update_pastorais_updated_at
  BEFORE UPDATE ON pastorais
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_eventos_updated_at ON eventos;
CREATE TRIGGER update_eventos_updated_at
  BEFORE UPDATE ON eventos
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_noticias_updated_at ON noticias;
CREATE TRIGGER update_noticias_updated_at
  BEFORE UPDATE ON noticias
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_usuarios_updated_at ON usuarios;
CREATE TRIGGER update_usuarios_updated_at
  BEFORE UPDATE ON usuarios
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- VIEWS ÚTEIS
-- ========================================

-- View: Eventos Futuros
CREATE OR REPLACE VIEW eventos_futuros AS
SELECT * FROM eventos
WHERE data_evento >= CURRENT_TIMESTAMP
  AND ativo = TRUE
ORDER BY data_evento ASC;

-- View: Notícias Publicadas
CREATE OR REPLACE VIEW noticias_publicadas AS
SELECT * FROM noticias
WHERE publicado = TRUE
ORDER BY data_publicacao DESC NULLS LAST, created_at DESC;

-- View: Contatos Pendentes
CREATE OR REPLACE VIEW contatos_pendentes AS
SELECT * FROM contatos
WHERE status = 'pendente'
ORDER BY data_envio ASC;

-- ========================================
-- MENSAGEM FINAL
-- ========================================
DO $$
BEGIN
  RAISE NOTICE ' Banco de dados inicializado com sucesso!';
  RAISE NOTICE ' Tabelas criadas: pastorais, eventos, noticias, contatos, usuarios, horarios_missa';
  RAISE NOTICE ' Views criadas: eventos_futuros, noticias_publicadas, contatos_pendentes';
  RAISE NOTICE ' Triggers configurados para atualização automática';
END $$;