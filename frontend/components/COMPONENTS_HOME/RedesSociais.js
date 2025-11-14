// components/COMPONENTES_HOME/RedesSociais.js
const RedesSociais = () => {
  const redes = [
    {
      platform: 'Instagram',
      icon: '📷',
      username: '@santuario_fatima',
      followers: '2.5K',
      color: '#E4405F',
      gradient: 'linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
      url: '#'
    },
    {
      platform: 'Facebook',
      icon: '📘',
      username: 'Santuário Fátima',
      followers: '3.2K',
      color: '#1877F2',
      gradient: 'linear-gradient(135deg, #1877F2, #0D5FDB)',
      url: '#'
    },
    {
      platform: 'YouTube',
      icon: '▶️',
      username: 'Santuário Fátima TV',
      followers: '1.8K',
      color: '#FF0000',
      gradient: 'linear-gradient(135deg, #FF0000, #CC0000)',
      url: '#'
    },
    {
      platform: 'WhatsApp',
      icon: '💬',
      username: 'Grupo de Oração',
      followers: '500+',
      color: '#25D366',
      gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
      url: '#'
    }
  ];

  return (
    <section className="redes-sociais-section">
      <div className="container">
        <div className="section-header">
          <div className="title-group">
            <span className="header-icon">🌐</span>
            <div>
              <h2>Nossas Redes Sociais</h2>
              <p>Conecte-se conosco nas redes sociais</p>
            </div>
          </div>
          <div className="network-effect"></div>
        </div>

        <div className="redes-grid">
          {redes.map((rede, index) => (
            <a
              key={rede.platform}
              href={rede.url}
              className="rede-card"
              style={{ '--accent-color': rede.color }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Gradient */}
              <div 
                className="card-bg" 
                style={{ background: rede.gradient }}
              ></div>
              
              {/* Content */}
              <div className="card-content">
                <div className="platform-header">
                  <div className="platform-icon">
                    {rede.icon}
                  </div>
                  <div className="platform-info">
                    <h3>{rede.platform}</h3>
                    <span className="username">{rede.username}</span>
                  </div>
                </div>

                <div className="followers-count">
                  <span className="count">{rede.followers}</span>
                  <span className="label">seguidores</span>
                </div>

                <div className="action-area">
                  <button className="follow-btn">
                    Seguir
                    <span className="btn-arrow">→</span>
                  </button>
                  
                  <div className="social-stats">
                    <div className="stat">
                      <span className="stat-icon">👥</span>
                      <span>Crescendo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Efeitos Visuais */}
              <div className="card-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              
              <div className="card-glow"></div>
            </a>
          ))}
        </div>

        {/* Feed Preview */}
        <div className="feed-preview">
          <div className="preview-header">
            <h3>📱 Feed ao Vivo</h3>
            <p>Últimas atualizações das nossas redes</p>
          </div>
          
          <div className="feed-grid">
            <div className="feed-item instagram-feed">
              <div className="feed-header">
                <div className="feed-avatar">📷</div>
                <div className="feed-info">
                  <strong>santuario_fatima</strong>
                  <span>Há 2 horas</span>
                </div>
              </div>
              <div className="feed-content">
                <div className="feed-image">
                  <div className="image-placeholder">
                    🌅 Momento de oração no santuário
                  </div>
                </div>
                <div className="feed-actions">
                  <span>❤️ 245</span>
                  <span>💬 45</span>
                  <span>📤 12</span>
                </div>
              </div>
            </div>

            <div className="feed-item youtube-feed">
              <div className="feed-header">
                <div className="feed-avatar">▶️</div>
                <div className="feed-info">
                  <strong>Santuário Fátima TV</strong>
                  <span>Ao vivo agora</span>
                </div>
                <div className="live-badge">LIVE</div>
              </div>
              <div className="feed-content">
                <div className="video-placeholder">
                  🎥 Transmissão ao vivo - Missa das 19:00
                  <div className="live-indicator"></div>
                </div>
                <div className="viewer-count">
                  👁️ 128 assistindo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .redes-sociais-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .redes-sociais-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(46, 125, 50, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(37, 211, 102, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .title-group {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .header-icon {
          font-size: 3rem;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #2e7d32;
          margin: 0;
          font-weight: bold;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }

        .network-effect {
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #2e7d32, transparent);
          margin: 2rem auto 0;
          position: relative;
        }

        .network-effect::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #2e7d32;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.5); }
        }

        .redes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .rede-card {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }

        .rede-card:hover {
          transform: translateY(-10px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px var(--accent-color, #2e7d32);
        }

        .card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          transition: height 0.3s ease;
        }

        .rede-card:hover .card-bg {
          height: 100%;
          opacity: 0.05;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .platform-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .platform-icon {
          font-size: 2.5rem;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }

        .platform-info h3 {
          margin: 0;
          font-size: 1.3rem;
          color: #333;
          font-weight: bold;
        }

        .username {
          color: #666;
          font-size: 0.9rem;
        }

        .followers-count {
          text-align: center;
          margin-bottom: 2rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.02);
          border-radius: 15px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .count {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          color: var(--accent-color, #2e7d32);
          margin-bottom: 0.5rem;
        }

        .label {
          color: #666;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .action-area {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .follow-btn {
          background: var(--accent-color, #2e7d32);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .follow-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .follow-btn:hover .btn-arrow {
          transform: translateX(3px);
        }

        .social-stats {
          display: flex;
          gap: 0.5rem;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: #666;
          background: rgba(0, 0, 0, 0.05);
          padding: 0.3rem 0.6rem;
          border-radius: 12px;
        }

        /* Efeitos Visuais */
        .card-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: var(--accent-color, #2e7d32);
          border-radius: 50%;
          opacity: 0;
          animation: floatParticle 3s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          width: 6px;
          height: 6px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          width: 4px;
          height: 4px;
          top: 60%;
          left: 80%;
          animation-delay: 1s;
        }

        .particle:nth-child(3) {
          width: 5px;
          height: 5px;
          top: 80%;
          left: 20%;
          animation-delay: 2s;
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-50px) rotate(180deg);
            opacity: 0;
          }
        }

        .card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, var(--accent-color, #2e7d32) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .rede-card:hover .card-glow {
          opacity: 0.1;
        }

        /* Feed Preview */
        .feed-preview {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(0, 0, 0, 0.05);
        }

        .preview-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .preview-header h3 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .preview-header p {
          color: #666;
          margin: 0;
        }

        .feed-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .feed-item {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .feed-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .feed-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .feed-info {
          flex: 1;
        }

        .feed-info strong {
          display: block;
          color: #333;
        }

        .feed-info span {
          font-size: 0.8rem;
          color: #666;
        }

        .live-badge {
          background: #ff0000;
          color: white;
          padding: 0.2rem 0.8rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        .feed-content {
          position: relative;
        }

        .feed-image, .video-placeholder {
          height: 200px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
          position: relative;
          overflow: hidden;
        }

        .live-indicator {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 8px;
          height: 8px;
          background: #ff0000;
          border-radius: 50%;
          animation: livePulse 1s ease-in-out infinite;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .feed-actions {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          color: #666;
        }

        .viewer-count {
          text-align: center;
          color: #666;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .redes-sociais-section {
            padding: 2rem 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .redes-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feed-grid {
            grid-template-columns: 1fr;
          }

          .title-group {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default RedesSociais;