// components/COMPONENTES_HOME/LiturgiaDiaria.js
import { useState, useEffect } from 'react';

const LiturgiaDiaria = () => {
  const [liturgia, setLiturgia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados da liturgia
    const fetchLiturgia = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const data = {
        data: new Date().toLocaleDateString('pt-BR'),
        tempoLiturgico: 'Tempo Comum',
        semana: '32ª Semana do Tempo Comum',
        corLiturgica: 'Verde',
        santos: ['São Leão Magno', 'Santa Margarida da Escócia'],
        leituras: {
          primeira: {
            titulo: 'Primeira Leitura (Ef 4,1-7.11-13)',
            texto: 'Irmãos, eu, prisioneiro no Senhor, vos exorto: vivei de maneira digna da vocação a que fostes chamados, com toda a humildade e mansidão, suportando-vos uns aos outros com paciência no amor.'
          },
          salmo: {
            refrao: 'O Senhor fez maravilhas em favor do seu povo.',
            versiculo: 'Sl 125'
          },
          evangelho: {
            titulo: 'Evangelho (Mt 25,14-30)',
            texto: 'Naquele tempo, disse Jesus aos seus discípulos: "Um homem ia viajar para o estrangeiro. Chamou seus servos e lhes confiou seus bens."'
          }
        }
      };
      
      setLiturgia(data);
      setLoading(false);
    };

    fetchLiturgia();
  }, []);

  if (loading) {
    return (
      <section className="liturgia-section loading">
        <div className="container">
          <div className="section-header">
            <h2>📖 Liturgia Diária</h2>
            <p>Carregando a Palavra de Deus...</p>
          </div>
          <div className="liturgia-content">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="leitura-skeleton">
                <div className="skeleton-line long"></div>
                <div className="skeleton-line medium"></div>
                <div className="skeleton-line short"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="liturgia-section">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <span className="bible-icon">📖</span>
            <div>
              <h2>Liturgia Diária</h2>
              <p className="date">{liturgia.data}</p>
            </div>
          </div>
          <div className="liturgia-info">
            <div className="info-badge tempo">
              <span className="label">Tempo:</span>
              <span className="value">{liturgia.tempoLiturgico}</span>
            </div>
            <div className="info-badge cor">
              <span className="label">Cor:</span>
              <span className="value">{liturgia.corLiturgica}</span>
            </div>
            <div className="info-badge semana">
              <span className="label">Semana:</span>
              <span className="value">{liturgia.semana}</span>
            </div>
          </div>
        </div>

        <div className="liturgia-content">
          {/* Santos do Dia */}
          <div className="santos-section">
            <h3>⛪ Santos do Dia</h3>
            <div className="santos-grid">
              {liturgia.santos.map((santo, index) => (
                <div key={index} className="santo-card">
                  <span className="santo-icon">🙏</span>
                  <span className="santo-name">{santo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leituras */}
          <div className="leituras-section">
            <div className="leitura-card primeira">
              <div className="leitura-header">
                <h4>📜 {liturgia.leituras.primeira.titulo}</h4>
                <span className="leitura-tag">Primeira Leitura</span>
              </div>
              <div className="leitura-texto">
                <p>{liturgia.leituras.primeira.texto}</p>
              </div>
              <div className="leitura-actions">
                <button className="action-btn">
                  📖 Ler Completo
                </button>
                <button className="action-btn">
                  🔊 Ouvir
                </button>
              </div>
            </div>

            <div className="leitura-card salmo">
              <div className="leitura-header">
                <h4>🎵 {liturgia.leituras.salmo.versiculo}</h4>
                <span className="leitura-tag">Salmo Responsorial</span>
              </div>
              <div className="leitura-texto">
                <p className="refrao">"{liturgia.leituras.salmo.refrao}"</p>
              </div>
            </div>

            <div className="leitura-card evangelho">
              <div className="leitura-header">
                <h4>✝️ {liturgia.leituras.evangelho.titulo}</h4>
                <span className="leitura-tag evangelho-tag">Evangelho</span>
              </div>
              <div className="leitura-texto">
                <p>{liturgia.leituras.evangelho.texto}</p>
              </div>
              <div className="evangelho-aclamacao">
                <div className="aclamacao-text">
                  <span className="prefix">℣:</span>
                  <span>Aleluia, aleluia, aleluia.</span>
                </div>
                <div className="aclamacao-text">
                  <span className="prefix">℟:</span>
                  <span>Eu sou o caminho, a verdade e a vida, diz o Senhor; ninguém vem ao Pai senão por mim.</span>
                </div>
              </div>
              <div className="leitura-actions">
                <button className="action-btn primary">
                  🙌 Glória a Vós, Senhor
                </button>
              </div>
            </div>
          </div>

          {/* Reflexão do Dia */}
          <div className="reflexao-section">
            <h3>💭 Reflexão do Dia</h3>
            <div className="reflexao-card">
              <div className="reflexao-content">
                <p>
                  "O Evangelho de hoje nos convida a refletir sobre o uso dos talentos 
                  que Deus nos concedeu. Cada um de nós recebeu dons especiais para 
                  construir o Reino de Deus aqui na Terra."
                </p>
                <div className="reflexao-author">
                  <span className="author-name">— Pe. João Silva</span>
                  <span className="author-role">Pároco</span>
                </div>
              </div>
              <div className="reflexao-actions">
                <button className="reflexao-btn">
                  💝 Oferecer esta oração
                </button>
                <button className="reflexao-btn">
                  📤 Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="acoes-rapidas">
          <h4>🚀 Ações Rápidas</h4>
          <div className="acoes-grid">
            <button className="acao-card">
              <span className="acao-icon">🕯️</span>
              <span className="acao-text">Acender Vela Virtual</span>
            </button>
            <button className="acao-card">
              <span className="acao-icon">📿</span>
              <span className="acao-text">Rezar o Terço</span>
            </button>
            <button className="acao-card">
              <span className="acao-icon">📅</span>
              <span className="acao-text">Calendário Litúrgico</span>
            </button>
            <button className="acao-card">
              <span className="acao-icon">🎵</span>
              <span className="acao-text">Cânticos da Missa</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .liturgia-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }

        .liturgia-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(46, 125, 50, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(33, 150, 243, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bible-icon {
          font-size: 3rem;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #2e7d32;
          margin: 0;
          font-weight: bold;
        }

        .date {
          font-size: 1.1rem;
          color: #666;
          margin: 0.5rem 0 0 0;
        }

        .liturgia-info {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .info-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.8rem 1.2rem;
          border-radius: 15px;
          background: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border: 2px solid;
          min-width: 100px;
        }

        .info-badge.tempo {
          border-color: #4caf50;
        }

        .info-badge.cor {
          border-color: #4caf50;
        }

        .info-badge.semana {
          border-color: #2196f3;
        }

        .info-badge .label {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.3rem;
        }

        .info-badge .value {
          font-size: 0.9rem;
          font-weight: bold;
          color: #333;
          text-align: center;
        }

        .liturgia-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .santos-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .santos-section h3 {
          color: #2e7d32;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .santos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .santo-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid #d4af37;
          transition: transform 0.3s ease;
        }

        .santo-card:hover {
          transform: translateX(5px);
          background: #e9ecef;
        }

        .santo-icon {
          font-size: 1.5rem;
        }

        .santo-name {
          font-weight: bold;
          color: #333;
        }

        .leituras-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .leitura-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          border-left: 5px solid;
          position: relative;
          overflow: hidden;
        }

        .leitura-card.primeira {
          border-left-color: #4caf50;
        }

        .leitura-card.salmo {
          border-left-color: #2196f3;
        }

        .leitura-card.evangelho {
          border-left-color: #d4af37;
          background: linear-gradient(135deg, #fff9e6, #ffffff);
        }

        .leitura-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .leitura-header h4 {
          margin: 0;
          color: #333;
          font-size: 1.2rem;
          flex: 1;
        }

        .leitura-tag {
          background: #4caf50;
          color: white;
          padding: 0.3rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .evangelho-tag {
          background: #d4af37;
        }

        .leitura-texto {
          margin-bottom: 1.5rem;
        }

        .leitura-texto p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          margin: 0;
          text-align: justify;
        }

        .refrao {
          font-style: italic;
          color: #2196f3;
          font-weight: bold;
          text-align: center;
          font-size: 1.2rem;
        }

        .evangelho-aclamacao {
          background: rgba(212, 175, 55, 0.1);
          padding: 1.5rem;
          border-radius: 10px;
          margin: 1.5rem 0;
          border-left: 4px solid #d4af37;
        }

        .aclamacao-text {
          margin-bottom: 0.8rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .aclamacao-text:last-child {
          margin-bottom: 0;
        }

        .prefix {
          font-weight: bold;
          color: #d4af37;
          min-width: 20px;
        }

        .leitura-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .action-btn {
          background: rgba(76, 175, 80, 0.1);
          color: #2e7d32;
          border: 2px solid #4caf50;
          padding: 0.7rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-btn:hover {
          background: #4caf50;
          color: white;
          transform: translateY(-2px);
        }

        .action-btn.primary {
          background: #d4af37;
          color: white;
          border-color: #d4af37;
        }

        .action-btn.primary:hover {
          background: #b8941f;
          border-color: #b8941f;
        }

        .reflexao-section {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .reflexao-section h3 {
          color: #2e7d32;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .reflexao-card {
          background: linear-gradient(135deg, #f8f9fa, #ffffff);
          padding: 2rem;
          border-radius: 15px;
          border: 2px solid #e9ecef;
        }

        .reflexao-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          font-style: italic;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .reflexao-author {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .author-name {
          display: block;
          font-weight: bold;
          color: #2e7d32;
          margin-bottom: 0.3rem;
        }

        .author-role {
          font-size: 0.9rem;
          color: #666;
        }

        .reflexao-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .reflexao-btn {
          background: white;
          border: 2px solid #2e7d32;
          color: #2e7d32;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .reflexao-btn:hover {
          background: #2e7d32;
          color: white;
          transform: translateY(-2px);
        }

        .acoes-rapidas {
          margin-top: 3rem;
        }

        .acoes-rapidas h4 {
          color: #2e7d32;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          text-align: center;
        }

        .acoes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .acao-card {
          background: white;
          border: 2px solid #e9ecef;
          padding: 1.5rem;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .acao-card:hover {
          transform: translateY(-5px);
          border-color: #2e7d32;
          box-shadow: 0 10px 25px rgba(46, 125, 50, 0.2);
        }

        .acao-icon {
          font-size: 2rem;
        }

        .acao-text {
          font-weight: bold;
          color: #333;
        }

        /* Loading States */
        .loading .section-header {
          text-align: center;
          justify-content: center;
        }

        .leitura-skeleton {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .skeleton-line {
          height: 12px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          margin-bottom: 1rem;
          border-radius: 4px;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }

        .skeleton-line.long {
          width: 100%;
        }

        .skeleton-line.medium {
          width: 70%;
        }

        .skeleton-line.short {
          width: 40%;
        }

        @keyframes skeleton-loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media (max-width: 768px) {
          .liturgia-section {
            padding: 2rem 0;
          }

          .section-header {
            flex-direction: column;
            text-align: center;
          }

          .header-content {
            flex-direction: column;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .liturgia-info {
            justify-content: center;
          }

          .leitura-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .leitura-actions, .reflexao-actions {
            justify-content: center;
          }

          .acoes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .leitura-card, .reflexao-card, .santos-section {
            padding: 1.5rem;
          }

          .acoes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default LiturgiaDiaria;