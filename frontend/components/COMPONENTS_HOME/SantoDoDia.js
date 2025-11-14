// components/COMPONENTES_HOME/SantoDoDia.js
import { useState, useEffect } from 'react';

const SantoDoDia = () => {
  const [santo, setSanto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSantoDoDia = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const santoData = {
        nome: "São Leão Magno",
        titulo: "Papa e Doutor da Igreja",
        dataFesta: "10 de Novembro",
        dataMorte: "461",
        nascimento: "400",
        canonizacao: "Doutor da Igreja (1754)",
        veneracao: "Igreja Católica",
        principaisFeitos: [
          "Defendeu a doutrina da Encarnação contra a heresia monofisita",
          "Confrontou Átila, o Huno, salvando Roma",
          "Escreveu o 'Tomos a Flaviano', documento fundamental da cristologia"
        ],
        frasesCelebres: [
          "“Reconhece, ó cristão, a tua dignidade.”",
          "“A paz do coração é a tranquilidade da ordem.”"
        ],
        oracao: `Ó Deus, que never permitis que seja vencida a Igreja 
que fundastes sobre a rocha da fé apostólica, 
fazei que, por intercessão do Papa São Leão Magno, 
seja ela sempre firme na vossa verdade 
e segura na vossa paz. Por Nosso Senhor Jesus Cristo. Amém.`,
        curiosidades: [
          "É chamado de 'Magno' (Grande) por sua extraordinária atuação como Papa",
          "Seus sermões e cartas são considerados obras-primas da teologia latina",
          "Foi o primeiro Papa a ser chamado de 'o Grande'"
        ]
      };
      
      setSanto(santoData);
      setLoading(false);
    };

    fetchSantoDoDia();
  }, []);

  if (loading) {
    return (
      <section className="santo-section loading">
        <div className="container">
          <div className="santo-card skeleton">
            <div className="skeleton-header">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-text">
                <div className="skeleton-line long"></div>
                <div className="skeleton-line medium"></div>
              </div>
            </div>
            <div className="skeleton-content">
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="santo-section">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <span className="saint-icon">😇</span>
            <div>
              <h2>Santo do Dia</h2>
              <p className="subtitle">Conheça a vida dos santos que nos inspiram</p>
            </div>
          </div>
          <div className="date-badge">
            <span className="day">{santo.dataFesta.split(' ')[0]}</span>
            <span className="month">{santo.dataFesta.split(' ')[2]}</span>
          </div>
        </div>

        <div className="santo-content">
          {/* Card Principal do Santo */}
          <div className="santo-card">
            <div className="santo-header">
              <div className="santo-avatar">
                <div className="avatar-placeholder">
                  👑
                </div>
                <div className="halo-effect"></div>
              </div>
              
              <div className="santo-info">
                <h1 className="santo-name">{santo.nome}</h1>
                <p className="santo-title">{santo.titulo}</p>
                
                <div className="santo-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span className="meta-text">Festa: {santo.dataFesta}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">✝️</span>
                    <span className="meta-text">Veneração: {santo.veneracao}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">⭐</span>
                    <span className="meta-text">Canonização: {santo.canonizacao}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Linha do Tempo */}
            <div className="timeline-section">
              <h3>⏳ Linha do Tempo</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker nascimento"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">~{santo.nascimento}</span>
                    <span className="timeline-event">Nascimento</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker papado"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">440-461</span>
                    <span className="timeline-event">Papado</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker morte"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{santo.dataMorte}</span>
                    <span className="timeline-event">Falecimento</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feitos Principais */}
            <div className="feitos-section">
              <h3>🎯 Feitos Principais</h3>
              <div className="feitos-grid">
                {santo.principaisFeitos.map((feito, index) => (
                  <div key={index} className="feito-card">
                    <div className="feito-icon">⭐</div>
                    <p className="feito-text">{feito}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frases Celebres */}
            <div className="frases-section">
              <h3>💬 Frases Celebres</h3>
              <div className="frases-list">
                {santo.frasesCelebres.map((frase, index) => (
                  <blockquote key={index} className="frase-item">
                    <span className="quote-mark">❝</span>
                    <p>{frase}</p>
                    <footer>— {santo.nome}</footer>
                  </blockquote>
                ))}
              </div>
            </div>

            {/* Oração */}
            <div className="oracao-section">
              <h3>🙏 Oração</h3>
              <div className="oracao-card">
                <div className="oracao-content">
                  <p>{santo.oracao}</p>
                </div>
                <div className="oracao-actions">
                  <button className="oracao-btn primary">
                    📿 Rezar Agora
                  </button>
                  <button className="oracao-btn">
                    💝 Oferecer esta oração
                  </button>
                  <button className="oracao-btn">
                    📤 Compartilhar
                  </button>
                </div>
              </div>
            </div>

            {/* Curiosidades */}
            <div className="curiosidades-section">
              <h3>🔍 Curiosidades</h3>
              <div className="curiosidades-list">
                {santo.curiosidades.map((curiosidade, index) => (
                  <div key={index} className="curiosidade-item">
                    <span className="curiosidade-icon">💡</span>
                    <span className="curiosidade-text">{curiosidade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ações Devocionais */}
          <div className="devocionais-section">
            <h3>🎪 Ações Devocionais</h3>
            <div className="devocionais-grid">
              <button className="devocional-card">
                <span className="devocional-icon">🕯️</span>
                <span className="devocional-title">Acender Vela</span>
                <span className="devocional-desc">Em honra a São Leão Magno</span>
              </button>
              
              <button className="devocional-card">
                <span className="devocional-icon">📖</span>
                <span className="devocional-title">Ler Biografia</span>
                <span className="devocional-desc">Conheça mais da sua história</span>
              </button>
              
              <button className="devocional-card">
                <span className="devocional-icon">🎨</span>
                <span className="devocional-title">Galeria</span>
                <span className="devocional-desc">Imagens e representações</span>
              </button>
              
              <button className="devocional-card">
                <span className="devocional-icon">📱</span>
                <span className="devocional-title">Wallpaper</span>
                <span className="devocional-desc">Baixe para seu celular</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .santo-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #fff5e6 0%, #fff9f0 100%);
          position: relative;
        }

        .santo-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.05) 0%, transparent 50%);
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
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .saint-icon {
          font-size: 3rem;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #8B4513;
          margin: 0;
          font-weight: bold;
        }

        .subtitle {
          color: #666;
          margin: 0.5rem 0 0 0;
          font-size: 1.1rem;
        }

        .date-badge {
          background: linear-gradient(135deg, #8B4513, #A0522D);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
        }

        .day {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .month {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .santo-content {
          display: grid;
          gap: 2rem;
        }

        .santo-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(139, 69, 19, 0.1);
        }

        .santo-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .santo-avatar {
          position: relative;
          flex-shrink: 0;
        }

        .avatar-placeholder {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #8B4513, #A0522D);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          box-shadow: 0 10px 25px rgba(139, 69, 19, 0.3);
        }

        .halo-effect {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 3px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          animation: haloSpin 4s linear infinite;
        }

        @keyframes haloSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .santo-info {
          flex: 1;
        }

        .santo-name {
          font-size: 2.2rem;
          color: #8B4513;
          margin: 0 0 0.5rem 0;
          font-weight: bold;
        }

        .santo-title {
          font-size: 1.2rem;
          color: #666;
          margin: 0 0 1.5rem 0;
          font-style: italic;
        }

        .santo-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(139, 69, 19, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }

        .meta-icon {
          font-size: 1rem;
        }

        .meta-text {
          font-size: 0.9rem;
          color: #8B4513;
          font-weight: 500;
        }

        .timeline-section {
          margin: 2rem 0;
          padding: 1.5rem;
          background: rgba(139, 69, 19, 0.05);
          border-radius: 15px;
        }

        .timeline-section h3 {
          color: #8B4513;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .timeline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding: 0 1rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8B4513, #A0522D, #8B4513);
          transform: translateY(-50%);
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .timeline-marker {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .timeline-marker.nascimento {
          background: #4caf50;
        }

        .timeline-marker.papado {
          background: #2196f3;
        }

        .timeline-marker.morte {
          background: #f44336;
        }

        .timeline-content {
          text-align: center;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .timeline-year {
          display: block;
          font-weight: bold;
          color: #8B4513;
          font-size: 0.9rem;
        }

        .timeline-event {
          font-size: 0.8rem;
          color: #666;
        }

        .feitos-section {
          margin: 2rem 0;
        }

        .feitos-section h3 {
          color: #8B4513;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .feitos-grid {
          display: grid;
          gap: 1rem;
        }

        .feito-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(139, 69, 19, 0.05);
          border-radius: 10px;
          border-left: 4px solid #d4af37;
        }

        .feito-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .feito-text {
          margin: 0;
          color: #555;
          line-height: 1.6;
        }

        .frases-section {
          margin: 2rem 0;
        }

        .frases-section h3 {
          color: #8B4513;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .frases-list {
          display: grid;
          gap: 1.5rem;
        }

        .frase-item {
          background: linear-gradient(135deg, #fff9f0, #fff5e6);
          padding: 1.5rem;
          border-radius: 15px;
          border-left: 5px solid #d4af37;
          position: relative;
          margin: 0;
        }

        .quote-mark {
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          font-size: 2rem;
          color: rgba(139, 69, 19, 0.3);
        }

        .frase-item p {
          margin: 0 0 1rem 0;
          font-size: 1.1rem;
          font-style: italic;
          color: #8B4513;
          line-height: 1.6;
          padding-left: 1.5rem;
        }

        .frase-item footer {
          text-align: right;
          color: #666;
          font-size: 0.9rem;
          font-style: normal;
        }

        .oracao-section {
          margin: 2rem 0;
        }

        .oracao-section h3 {
          color: #8B4513;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .oracao-card {
          background: linear-gradient(135deg, #8B4513, #A0522D);
          color: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(139, 69, 19, 0.3);
        }

        .oracao-content p {
          margin: 0 0 2rem 0;
          line-height: 1.8;
          font-size: 1.1rem;
          text-align: center;
        }

        .oracao-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .oracao-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          backdrop-filter: blur(10px);
        }

        .oracao-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .oracao-btn.primary {
          background: rgba(255, 255, 255, 0.9);
          color: #8B4513;
          border-color: transparent;
        }

        .oracao-btn.primary:hover {
          background: white;
        }

        .curiosidades-section {
          margin: 2rem 0 0 0;
        }

        .curiosidades-section h3 {
          color: #8B4513;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .curiosidades-list {
          display: grid;
          gap: 1rem;
        }

        .curiosidade-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(139, 69, 19, 0.05);
          border-radius: 10px;
        }

        .curiosidade-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .curiosidade-text {
          margin: 0;
          color: #555;
          line-height: 1.6;
        }

        .devocionais-section {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .devocionais-section h3 {
          color: #8B4513;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          text-align: center;
        }

        .devocionais-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .devocional-card {
          background: rgba(139, 69, 19, 0.05);
          border: 2px solid rgba(139, 69, 19, 0.1);
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

        .devocional-card:hover {
          transform: translateY(-5px);
          border-color: #8B4513;
          background: rgba(139, 69, 19, 0.1);
          box-shadow: 0 10px 25px rgba(139, 69, 19, 0.2);
        }

        .devocional-icon {
          font-size: 2rem;
        }

        .devocional-title {
          font-weight: bold;
          color: #8B4513;
          font-size: 1.1rem;
        }

        .devocional-desc {
          font-size: 0.9rem;
          color: #666;
        }

        /* Loading States */
        .skeleton {
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }

        .skeleton-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .skeleton-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
        }

        .skeleton-text {
          flex: 1;
        }

        .skeleton-line {
          height: 12px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          margin-bottom: 1rem;
          border-radius: 4px;
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
          .santo-section {
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

          .santo-header {
            flex-direction: column;
            text-align: center;
          }

          .santo-meta {
            justify-content: center;
          }

          .timeline {
            flex-direction: column;
            gap: 2rem;
          }

          .timeline::before {
            display: none;
          }

          .oracao-actions {
            flex-direction: column;
            align-items: center;
          }

          .oracao-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }

          .devocionais-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .santo-card, .devocionais-section {
            padding: 1.5rem;
          }

          .devocionais-grid {
            grid-template-columns: 1fr;
          }

          .avatar-placeholder {
            width: 100px;
            height: 100px;
            font-size: 2.5rem;
          }

          .santo-name {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SantoDoDia;
