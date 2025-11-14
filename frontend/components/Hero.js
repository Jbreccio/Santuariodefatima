// components/Hero.js
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Título Principal */}
          <div className="hero-text">
            <h1 className="hero-title">
              Santuário Nossa Senhora de Fátima
            </h1>
            
            <p className="hero-subtitle">
              Um lar para o coração, uma guia para a alma
            </p>
            
            <p className="hero-description">
              Há mais de 50 anos servindo a comunidade com fé, amor e dedicação. 
              Junte-se a nós nessa jornada espiritual.
            </p>
          </div>

          {/* Cards de Destaque */}
          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon">⛪</div>
              <h4>Missas Diárias</h4>
              <p>Celebrações todos os dias para fortalecer sua fé</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🙏</div>
              <h4>Oração e Fé</h4>
              <p>Momentos de reflexão e conexão espiritual</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h4>Comunidade</h4>
              <p>Família católica unida em amor fraterno</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h4>Ambiente Seguro</h4>
              <p>Site protegido com tecnologia avançada</p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="hero-actions">
            <Link href="/missas" className="btn btn-primary">
              📅 Ver Horários de Missa
            </Link>
            
            <Link href="/doacoes" className="btn btn-secondary">
              💝 Fazer Doação
            </Link>
            
            <Link href="/calendario" className="btn btn-outline">
              📆 Calendário Litúrgico
            </Link>
          </div>

          {/* Aviso de Segurança */}
          <div className="security-notice">
            <span className="security-icon">🛡️</span>
            <span>Site protegido com criptografia SHA256 e React Shield</span>
          </div>

          {/* Estatísticas Rápidas */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Anos de História</span>
            </div>
            <div className="stat">
              <span className="stat-number">1K+</span>
              <span className="stat-label">Fiéis</span>
            </div>
            <div className="stat">
              <span className="stat-number">7</span>
              <span className="stat-label">Pastorais Ativas</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          background: linear-gradient(135deg, #1a4a1c 0%, #2e7d32 100%);
          color: white;
          padding: 5rem 0;
          text-align: center;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-text {
          margin-bottom: 3rem;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: #d4af37;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-weight: bold;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          opacity: 0.95;
          font-weight: 300;
        }

        .hero-description {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem 1.5rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h4 {
          color: #d4af37;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .feature-card p {
          opacity: 0.9;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .btn-primary {
          background: #d4af37;
          color: #1a4a1c;
        }

        .btn-primary:hover {
          background: #b8941f;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid #d4af37;
          color: #d4af37;
        }

        .btn-secondary:hover {
          background: #d4af37;
          color: #1a4a1c;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid white;
          color: white;
        }

        .btn-outline:hover {
          background: white;
          color: #1a4a1c;
          transform: translateY(-2px);
        }

        .security-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          backdrop-filter: blur(10px);
          margin: 2rem 0;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .security-icon {
          font-size: 1.2rem;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          color: #d4af37;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0;
            min-height: auto;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.4rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .hero-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;