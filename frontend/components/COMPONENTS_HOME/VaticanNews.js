// components/COMPONENTES_HOME/VaticanNews.js
import { useState, useEffect } from 'react';

const VaticanNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de notícias do Vaticano
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      // Simulando delay de API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockNews = [
        {
          id: 1,
          title: 'Papa Francisco enfatiza importância da ecologia integral',
          excerpt: 'Em audiência geral, o Santo Padre reforçou o cuidado com a criação...',
          date: '2024-01-15',
          category: 'Ensino',
          image: '/api/placeholder/400/250'
        },
        {
          id: 2,
          title: 'Vaticano anuncia novo documento sobre sinodalidade',
          excerpt: 'Documento preparatório para o Sínodo dos Bispos foi publicado...',
          date: '2024-01-14',
          category: 'Igreja',
          image: '/api/placeholder/400/250'
        },
        {
          id: 3,
          title: 'Celebração do Dia Mundial da Paz 2024',
          excerpt: 'Mensagem do Papa para o 57º Dia Mundial da Paz aborda fraternidade...',
          date: '2024-01-10',
          category: 'Eventos',
          image: '/api/placeholder/400/250'
        }
      ];
      
      setNews(mockNews);
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <section className="vatican-news-section">
      <div className="container">
        <div className="section-header">
          <div className="title-wrapper">
            <span className="icon">🏛️</span>
            <h2>Notícias do Vaticano</h2>
          </div>
          <p>Fique por dentro das últimas notícias da Santa Sé</p>
          <div className="header-accent"></div>
        </div>

        <div className="news-grid">
          {loading ? (
            // Skeleton Loading
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="news-card skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line short"></div>
                  <div className="skeleton-line medium"></div>
                  <div className="skeleton-line long"></div>
                </div>
              </div>
            ))
          ) : (
            news.map((item) => (
              <article key={item.id} className="news-card">
                <div className="card-header">
                  <div className="image-container">
                    <div className="news-image">
                      <div className="image-placeholder">
                        📰
                      </div>
                      <div className="image-overlay"></div>
                    </div>
                    <div className="category-badge">
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="news-meta">
                    <span className="date">{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                    <span className="divider">•</span>
                    <span className="source">Santa Sé</span>
                  </div>

                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>

                  <div className="card-footer">
                    <button className="read-more-btn">
                      Ler Mais
                      <span className="arrow">→</span>
                    </button>
                    <div className="news-actions">
                      <button className="action-btn" title="Compartilhar">
                        📤
                      </button>
                      <button className="action-btn" title="Salvar">
                        💾
                      </button>
                    </div>
                  </div>
                </div>

                {/* Efeito de brilho hover */}
                <div className="card-glow"></div>
              </article>
            ))
          )}
        </div>

        <div className="section-footer">
          <button className="view-all-btn">
            Ver Todas as Notícias
            <span className="btn-icon">📰</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .vatican-news-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
          position: relative;
          overflow: hidden;
        }

        .vatican-news-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(192, 57, 43, 0.03) 0%, transparent 50%);
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
          margin-bottom: 3rem;
          position: relative;
        }

        .title-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .icon {
          font-size: 2.5rem;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #8B4513;
          margin: 0;
          font-weight: bold;
          background: linear-gradient(135deg, #8B4513, #A0522D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 1.5rem;
        }

        .header-accent {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #8B4513, #A0522D, #8B4513);
          margin: 0 auto;
          border-radius: 2px;
          position: relative;
        }

        .header-accent::after {
          content: '✞';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 0 10px;
          color: #8B4513;
          font-size: 1rem;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .news-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(139, 69, 19, 0.1);
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .news-card:hover {
          transform: translateY(-10px);
          box-shadow: 
            0 20px 40px rgba(139, 69, 19, 0.15),
            0 0 0 1px rgba(139, 69, 19, 0.2);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(139, 69, 19, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .news-card:hover .card-glow {
          opacity: 1;
        }

        .card-header {
          position: relative;
          overflow: hidden;
        }

        .image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .news-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #8B4513, #A0522D);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .image-placeholder {
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(139, 69, 19, 0.3), rgba(160, 82, 45, 0.3));
        }

        .category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.95);
          color: #8B4513;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
        }

        .card-content {
          padding: 1.5rem;
        }

        .news-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #666;
        }

        .divider {
          color: #ccc;
        }

        .source {
          color: #8B4513;
          font-weight: bold;
        }

        .news-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 1rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .news-excerpt {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .read-more-btn {
          background: linear-gradient(135deg, #8B4513, #A0522D);
          color: white;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .read-more-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover .arrow {
          transform: translateX(3px);
        }

        .news-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          background: rgba(139, 69, 19, 0.1);
          border: none;
          padding: 0.5rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .action-btn:hover {
          background: rgba(139, 69, 19, 0.2);
          transform: scale(1.1);
        }

        /* Skeleton Loading */
        .skeleton {
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }

        .skeleton-image {
          height: 200px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
        }

        .skeleton-content {
          padding: 1.5rem;
        }

        .skeleton-line {
          height: 12px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          margin-bottom: 1rem;
          border-radius: 4px;
        }

        .skeleton-line.short {
          width: 40%;
        }

        .skeleton-line.medium {
          width: 70%;
        }

        .skeleton-line.long {
          width: 100%;
        }

        @keyframes skeleton-loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .section-footer {
          text-align: center;
        }

        .view-all-btn {
          background: transparent;
          border: 2px solid #8B4513;
          color: #8B4513;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .view-all-btn:hover {
          background: #8B4513;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 69, 19, 0.2);
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .vatican-news-section {
            padding: 2rem 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .news-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .title-wrapper {
            flex-direction: column;
            gap: 0.5rem;
          }

          .card-content {
            padding: 1rem;
          }

          .news-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VaticanNews;