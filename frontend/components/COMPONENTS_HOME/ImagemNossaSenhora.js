// components/COMPONENTES_HOME/ImagemNossaSenhora.js
const ImagemNossaSenhora = () => {
  return (
    <section className="nossa-senhora-section">
      <div className="container">
        <div className="image-content">
          {/* Imagem com efeito de glória */}
          <div className="image-wrapper">
            <div className="main-image">
              <div className="image-placeholder">
                🙏<br/>
                Nossa Senhora de Fátima
              </div>
              
              {/* Efeitos de luz */}
              <div className="light-effect top-left"></div>
              <div className="light-effect top-right"></div>
              <div className="light-effect bottom-left"></div>
              <div className="light-effect bottom-right"></div>
              
              {/* Auréola */}
              <div className="halo"></div>
            </div>
            
            {/* Partículas flutuantes */}
            <div className="floating-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          </div>

          {/* Texto devocional */}
          <div className="devotional-text">
            <div className="text-header">
              <h2>Nossa Senhora de Fátima</h2>
              <div className="divider"></div>
            </div>
            
            <blockquote className="quote">
              "No fim, o meu Imaculado Coração triunfará"
            </blockquote>
            
            <div className="devotional-content">
              <p>
                Nossa Senhora de Fátima apareceu aos três pastorinhos - Lúcia, 
                Francisco e Jacinta - em 1917, na Cova da Iria, Portugal. 
                Suas mensagens de oração, penitência e conversão continuam 
                a inspirar fiéis em todo o mundo.
              </p>
              
              <div className="prayer-time">
                <div className="prayer-icon">⏰</div>
                <div className="prayer-info">
                  <strong>Terço Diário</strong>
                  <span>18:00 horas</span>
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="action-buttons">
              <button className="prayer-btn">
                📿 Rezar o Terço
              </button>
              <button className="history-btn">
                📖 Conhecer a História
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nossa-senhora-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8f5e8 100%);
          position: relative;
          overflow: hidden;
        }

        .nossa-senhora-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(46, 125, 50, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .image-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .main-image {
          width: 300px;
          height: 400px;
          background: linear-gradient(135deg, #1a4a1c, #2e7d32, #1a4a1c);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(212, 175, 55, 0.3);
        }

        .image-placeholder {
          text-align: center;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          z-index: 2;
          position: relative;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        /* Efeitos de luz nos cantos */
        .light-effect {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          filter: blur(10px);
          animation: pulse 4s ease-in-out infinite;
        }

        .light-effect.top-left {
          top: -30px;
          left: -30px;
          animation-delay: 0s;
        }

        .light-effect.top-right {
          top: -30px;
          right: -30px;
          animation-delay: 1s;
        }

        .light-effect.bottom-left {
          bottom: -30px;
          left: -30px;
          animation-delay: 2s;
        }

        .light-effect.bottom-right {
          bottom: -30px;
          right: -30px;
          animation-delay: 3s;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        /* Auréola */
        .halo {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 340px;
          height: 100px;
          background: radial-gradient(ellipse, rgba(212, 175, 55, 0.4) 0%, transparent 70%);
          filter: blur(20px);
          animation: haloFloat 6s ease-in-out infinite;
        }

        @keyframes haloFloat {
          0%, 100% { transform: translateX(-50%) translateY(0px) scale(1); }
          50% { transform: translateX(-50%) translateY(-10px) scale(1.05); }
        }

        /* Partículas flutuantes */
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: rgba(212, 175, 55, 0.6);
          border-radius: 50%;
          animation: floatParticle 8s linear infinite;
        }

        .particle:nth-child(1) {
          width: 8px;
          height: 8px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          width: 6px;
          height: 6px;
          top: 60%;
          left: 80%;
          animation-delay: 2s;
        }

        .particle:nth-child(3) {
          width: 10px;
          height: 10px;
          top: 80%;
          left: 20%;
          animation-delay: 4s;
        }

        .particle:nth-child(4) {
          width: 5px;
          height: 5px;
          top: 30%;
          left: 70%;
          animation-delay: 6s;
        }

        .particle:nth-child(5) {
          width: 7px;
          height: 7px;
          top: 70%;
          left: 40%;
          animation-delay: 1s;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Texto devocional */
        .devotional-text {
          color: #333;
        }

        .text-header h2 {
          font-size: 2.5rem;
          color: #2e7d32;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2e7d32, #d4af37);
          border-radius: 2px;
          margin-bottom: 2rem;
        }

        .quote {
          font-size: 1.4rem;
          font-style: italic;
          color: #1a4a1c;
          border-left: 4px solid #d4af37;
          padding-left: 1.5rem;
          margin: 2rem 0;
          line-height: 1.6;
        }

        .devotional-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 2rem;
        }

        .prayer-time {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(46, 125, 50, 0.1);
          padding: 1rem 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #d4af37;
          margin: 2rem 0;
        }

        .prayer-icon {
          font-size: 2rem;
        }

        .prayer-info {
          display: flex;
          flex-direction: column;
        }

        .prayer-info strong {
          color: #2e7d32;
          font-size: 1.1rem;
        }

        .prayer-info span {
          color: #666;
          font-size: 0.9rem;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .prayer-btn, .history-btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .prayer-btn {
          background: linear-gradient(135deg, #2e7d32, #4caf50);
          color: white;
        }

        .prayer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(46, 125, 50, 0.3);
        }

        .history-btn {
          background: transparent;
          border: 2px solid #2e7d32;
          color: #2e7d32;
        }

        .history-btn:hover {
          background: #2e7d32;
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 968px) {
          .image-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .main-image {
            width: 250px;
            height: 350px;
          }

          .halo {
            width: 290px;
          }

          .action-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .nossa-senhora-section {
            padding: 2rem 0;
          }

          .text-header h2 {
            font-size: 2rem;
          }

          .quote {
            font-size: 1.2rem;
          }

          .main-image {
            width: 200px;
            height: 300px;
          }

          .halo {
            width: 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImagemNossaSenhora;