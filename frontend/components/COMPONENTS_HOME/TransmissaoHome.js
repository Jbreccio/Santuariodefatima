// components/COMPONENTES_HOME/TransmissaoHome.js
import { useState, useEffect } from 'react';

const TransmissaoHome = () => {
  const [isLive, setIsLive] = useState(true);
  const [viewers, setViewers] = useState(128);
  const [currentEvent, setCurrentEvent] = useState('Missa das 19:00');

  // Simular mudança de viewers
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10) - 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  const transmissoes = [
    {
      id: 1,
      title: 'Missa Diária',
      time: '19:00',
      priest: 'Pe. João Silva',
      description: 'Celebração eucarística da comunidade',
      isLive: true
    },
    {
      id: 2,
      title: 'Terço Mariano',
      time: '18:00', 
      priest: 'Pastoral da Liturgia',
      description: 'Oração do santo terço em comunidade',
      isLive: false
    },
    {
      id: 3,
      title: 'Adoração ao Santíssimo',
      time: '20:00',
      priest: 'Ministros da Eucaristia',
      description: 'Momento de adoração e silêncio',
      isLive: false
    }
  ];

  return (
    <section className="transmissao-section">
      <div className="container">
        <div className="section-header">
          <div className="title-group">
            <span className="live-icon">🔴</span>
            <div>
              <h2>Transmissão ao Vivo</h2>
              <p>Participe das nossas celebrações online</p>
            </div>
          </div>
          <div className="live-indicator">
            <span className={`status-dot ${isLive ? 'live' : 'offline'}`}></span>
            <span>{isLive ? 'AO VIVO AGORA' : 'OFFLINE'}</span>
          </div>
        </div>

        <div className="transmissao-content">
          {/* Player Principal */}
          <div className="player-container">
            <div className="video-player">
              <div className="video-placeholder">
                {isLive ? (
                  <>
                    <div className="live-badge">LIVE</div>
                    <div className="video-content">
                      <span className="video-icon">🎥</span>
                      <h3>{currentEvent}</h3>
                      <div className="viewer-count">
                        👁️ {viewers} assistindo
                      </div>
                    </div>
                    <div className="live-wave"></div>
                  </>
                ) : (
                  <div className="offline-content">
                    <span className="offline-icon">⏸️</span>
                    <h3>Transmissão Offline</h3>
                    <p>Voltamos em breve com nossas celebrações</p>
                  </div>
                )}
              </div>
              
              {/* Controles do Player */}
              <div className="player-controls">
                <button className="control-btn play-pause">
                  {isLive ? '⏸️' : '▶️'}
                </button>
                <div className="volume-control">
                  <span>🔊</span>
                  <div className="volume-bar">
                    <div className="volume-level"></div>
                  </div>
                </div>
                <button className="control-btn fullscreen">
                  ⛶
                </button>
                <button className="control-btn share">
                  📤
                </button>
              </div>
            </div>

            {/* Informações da Transmissão */}
            <div className="stream-info">
              <div className="info-card">
                <h4>Informações da Transmissão</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Celebrante:</span>
                    <span className="info-value">Pe. João Silva</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Horário:</span>
                    <span className="info-value">19:00 - 20:00</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Local:</span>
                    <span className="info-value">Capela Principal</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Qualidade:</span>
                    <span className="info-value quality">HD 720p</span>
                  </div>
                </div>
              </div>

              {/* Chat Simulado */}
              <div className="chat-preview">
                <div className="chat-header">
                  <h5>💬 Chat da Live</h5>
                  <span className="online-count">👥 {viewers}</span>
                </div>
                <div className="chat-messages">
                  <div className="message">
                    <span className="user">Maria S.:</span>
                    <span className="text">Que linda a celebração! 🙏</span>
                  </div>
                  <div className="message">
                    <span className="user">José A.:</span>
                    <span className="text">Paz e bem a todos! ✝️</span>
                  </div>
                  <div className="message">
                    <span className="user">Ana L.:</span>
                    <span className="text">Obrigada pela transmissão! 💝</span>
                  </div>
                </div>
                <div className="chat-input">
                  <input type="text" placeholder="Envie uma mensagem..." />
                  <button>➤</button>
                </div>
              </div>
            </div>
          </div>

          {/* Grade de Programação */}
          <div className="programacao-section">
            <h4>📅 Próximas Transmissões</h4>
            <div className="programacao-grid">
              {transmissoes.map((transmissao) => (
                <div 
                  key={transmissao.id} 
                  className={`programa-card ${transmissao.isLive ? 'live-now' : ''}`}
                >
                  <div className="programa-time">
                    <span className="time">{transmissao.time}</span>
                    {transmissao.isLive && <span className="live-badge-small">LIVE</span>}
                  </div>
                  <div className="programa-info">
                    <h5>{transmissao.title}</h5>
                    <p>{transmissao.description}</p>
                    <span className="celebrante">{transmissao.priest}</span>
                  </div>
                  <button className="alerta-btn">
                    ⏰ Lembrar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="stats-section">
          <div className="stat-card">
            <span className="stat-icon">👁️</span>
            <div className="stat-info">
              <span className="stat-number">{viewers}</span>
              <span className="stat-label">Assistindo Agora</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📱</span>
            <div className="stat-info">
              <span className="stat-number">1.2K</span>
              <span className="stat-label">Seguidores</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">⏱️</span>
            <div className="stat-info">
              <span className="stat-number">28</span>
              <span className="stat-label">Horas Transmitidas</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transmissao-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .transmissao-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(46, 125, 50, 0.05) 0%, transparent 50%);
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
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .live-icon {
          font-size: 2rem;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin: 0;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          margin: 0;
          color: #ccc;
          font-size: 1.1rem;
        }

        .live-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 0, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 0, 0, 0.3);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: statusPulse 2s ease-in-out infinite;
        }

        .status-dot.live {
          background: #ff6b6b;
        }

        .status-dot.offline {
          background: #666;
          animation: none;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .transmissao-content {
          display: grid;
          gap: 2rem;
        }

        .player-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .video-player {
          background: #2d2d2d;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .video-placeholder {
          height: 400px;
          background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .live-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #ff6b6b;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: liveBadgePulse 2s ease-in-out infinite;
        }

        @keyframes liveBadgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .video-content {
          text-align: center;
          color: white;
        }

        .video-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
        }

        .video-content h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .viewer-count {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .live-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
          animation: waveMove 3s ease-in-out infinite;
        }

        @keyframes waveMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .offline-content {
          text-align: center;
          color: #ccc;
        }

        .offline-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
        }

        .player-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .control-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 0.5rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .volume-bar {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          position: relative;
          cursor: pointer;
        }

        .volume-level {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 70%;
          background: #ff6b6b;
          border-radius: 2px;
        }

        .stream-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card, .chat-preview {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-card h4, .chat-header h5 {
          margin: 0 0 1rem 0;
          color: #ff6b6b;
        }

        .info-grid {
          display: grid;
          gap: 0.8rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-label {
          color: #ccc;
          font-size: 0.9rem;
        }

        .info-value {
          color: white;
          font-weight: bold;
        }

        .quality {
          color: #4cd964;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .online-count {
          font-size: 0.8rem;
          color: #ccc;
        }

        .chat-messages {
          height: 120px;
          overflow-y: auto;
          margin-bottom: 1rem;
        }

        .message {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .user {
          color: #ff6b6b;
          font-weight: bold;
        }

        .text {
          color: #ccc;
        }

        .chat-input {
          display: flex;
          gap: 0.5rem;
        }

        .chat-input input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 0.5rem 1rem;
          color: white;
          outline: none;
        }

        .chat-input button {
          background: #ff6b6b;
          border: none;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
        }

        .programacao-section {
          margin-top: 2rem;
        }

        .programacao-section h4 {
          margin-bottom: 1rem;
          color: #ff6b6b;
        }

        .programacao-grid {
          display: grid;
          gap: 1rem;
        }

        .programa-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .programa-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }

        .programa-card.live-now {
          border-color: #ff6b6b;
          background: rgba(255, 107, 107, 0.1);
        }

        .programa-time {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          min-width: 60px;
        }

        .time {
          font-weight: bold;
          font-size: 1.1rem;
        }

        .live-badge-small {
          background: #ff6b6b;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: bold;
        }

        .programa-info {
          flex: 1;
        }

        .programa-info h5 {
          margin: 0 0 0.3rem 0;
          color: white;
        }

        .programa-info p {
          margin: 0 0 0.3rem 0;
          color: #ccc;
          font-size: 0.9rem;
        }

        .celebrante {
          color: #ff6b6b;
          font-size: 0.8rem;
        }

        .alerta-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.8rem;
        }

        .alerta-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 3rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
        }

        .stat-icon {
          font-size: 2rem;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: bold;
          color: #ff6b6b;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #ccc;
        }

        @media (max-width: 968px) {
          .player-container {
            grid-template-columns: 1fr;
          }

          .video-placeholder {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .transmissao-section {
            padding: 2rem 0;
          }

          .section-header {
            flex-direction: column;
            text-align: center;
          }

          .title-group {
            flex-direction: column;
          }

          .programa-card {
            flex-direction: column;
            text-align: center;
          }

          .stats-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default TransmissaoHome;