// components/COMPONENTES_HOME/InstagramFeed.js
import { useState, useEffect } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockPosts = [
        {
          id: 1,
          username: 'santuario_fatima',
          avatar: '⛪',
          location: 'Santuário Nossa Senhora de Fátima',
          image: '/api/placeholder/400/400',
          caption: 'Celebração de domingo com nossa comunidade! 🙏✨ #Fé #Comunidade #SantuárioFátima',
          likes: 245,
          comments: 34,
          time: '2 horas atrás',
          isVideo: false,
          isLiked: false
        },
        {
          id: 2,
          username: 'santuario_fatima', 
          avatar: '⛪',
          location: 'Capela do Santíssimo',
          image: '/api/placeholder/400/400',
          caption: 'Momento de adoração e silêncio. Que a paz de Cristo esteja com todos! 🕯️✝️',
          likes: 189,
          comments: 22,
          time: '1 dia atrás',
          isVideo: false,
          isLiked: true
        },
        {
          id: 3,
          username: 'santuario_fatima',
          avatar: '⛪',
          location: 'Pátio do Santuário',
          image: '/api/placeholder/400/400',
          caption: 'Encontro da pastoral da juventude! Jovens construindo o Reino de Deus! 👥💫',
          likes: 312,
          comments: 45,
          time: '2 dias atrás',
          isVideo: true,
          isLiked: false
        },
        {
          id: 4,
          username: 'santuario_fatima',
          avatar: '⛪',
          location: 'Jardim do Santuário',
          image: '/api/placeholder/400/400',
          caption: 'A beleza da criação nos leva a louvar o Criador! 🌿☀️ #Natureza #DeusCriador',
          likes: 167,
          comments: 18,
          time: '3 dias atrás',
          isVideo: false,
          isLiked: false
        }
      ];
      
      setPosts(mockPosts);
      setLoading(false);
    };

    fetchInstagramPosts();
  }, []);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked
          }
        : post
    ));
  };

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <section className="instagram-section loading">
        <div className="container">
          <div className="section-header">
            <h2>📷 Instagram</h2>
            <p>@santuario_fatima</p>
          </div>
          <div className="feed-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="post-skeleton">
                <div className="skeleton-image"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="section-header">
          <div className="profile-header">
            <div className="profile-avatar">
              <div className="avatar">⛪</div>
              <div className="verified-badge">✓</div>
            </div>
            <div className="profile-info">
              <h2>santuario_fatima</h2>
              <p>Santuário Nossa Senhora de Fátima</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="number">48</span>
                  <span className="label">publicações</span>
                </div>
                <div className="stat">
                  <span className="number">2.5K</span>
                  <span className="label">seguidores</span>
                </div>
                <div className="stat">
                  <span className="number">328</span>
                  <span className="label">seguindo</span>
                </div>
              </div>
            </div>
          </div>
          <button className="follow-btn">
            Seguir
          </button>
        </div>

        <div className="highlight-stories">
          <div className="story-item">
            <div className="story-ring">
              <div className="story-avatar">🙏</div>
            </div>
            <span className="story-label">Orações</span>
          </div>
          <div className="story-item">
            <div className="story-ring">
              <div className="story-avatar">⛪</div>
            </div>
            <span className="story-label">Missas</span>
          </div>
          <div className="story-item">
            <div className="story-ring">
              <div className="story-avatar">👥</div>
            </div>
            <span className="story-label">Eventos</span>
          </div>
          <div className="story-item">
            <div className="story-ring">
              <div className="story-avatar">🌿</div>
            </div>
            <span className="story-label">Natureza</span>
          </div>
        </div>

        <div className="feed-grid">
          {posts.map((post) => (
            <article key={post.id} className="instagram-post">
              <div className="post-header">
                <div className="user-info">
                  <div className="user-avatar">
                    {post.avatar}
                  </div>
                  <div className="user-details">
                    <strong>{post.username}</strong>
                    <span>{post.location}</span>
                  </div>
                </div>
                <button className="more-btn">⋯</button>
              </div>

              <div 
                className="post-image"
                onClick={() => openModal(post)}
              >
                <div className="image-placeholder">
                  {post.isVideo ? '🎥' : '📸'}
                  {post.isVideo && <div className="play-indicator">▶</div>}
                </div>
                <div className="image-overlay">
                  <div className="engagement-stats">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>

              <div className="post-actions">
                <button 
                  className={`action-btn like-btn ${post.isLiked ? 'liked' : ''}`}
                  onClick={() => handleLike(post.id)}
                >
                  {post.isLiked ? '❤️' : '🤍'}
                </button>
                <button className="action-btn">
                  💬
                </button>
                <button className="action-btn">
                  📤
                </button>
                <button className="action-btn save-btn">
                  💾
                </button>
              </div>

              <div className="post-caption">
                <p>
                  <strong>{post.username}</strong> {post.caption}
                </p>
              </div>

              <div className="post-time">
                {post.time}
              </div>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <button className="view-more-btn">
            Ver mais no Instagram
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            
            <div className="modal-post">
              <div className="modal-image">
                <div className="image-placeholder large">
                  {selectedPost.isVideo ? '🎥' : '📸'}
                  {selectedPost.isVideo && <div className="play-indicator large">▶</div>}
                </div>
              </div>
              
              <div className="modal-sidebar">
                <div className="modal-header">
                  <div className="user-info">
                    <div className="user-avatar">
                      {selectedPost.avatar}
                    </div>
                    <div className="user-details">
                      <strong>{selectedPost.username}</strong>
                      <span>{selectedPost.location}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-caption">
                  <p>
                    <strong>{selectedPost.username}</strong> {selectedPost.caption}
                  </p>
                </div>

                <div className="modal-actions">
                  <div className="action-group">
                    <button 
                      className={`action-btn like-btn ${selectedPost.isLiked ? 'liked' : ''}`}
                      onClick={() => handleLike(selectedPost.id)}
                    >
                      {selectedPost.isLiked ? '❤️' : '🤍'}
                    </button>
                    <button className="action-btn">
                      💬
                    </button>
                    <button className="action-btn">
                      📤
                    </button>
                  </div>
                  <button className="action-btn save-btn">
                    💾
                  </button>
                </div>

                <div className="modal-stats">
                  <span className="likes">{selectedPost.likes} curtidas</span>
                  <span className="time">{selectedPost.time}</span>
                </div>

                <div className="comment-section">
                  <div className="comment-input">
                    <input type="text" placeholder="Adicione um comentário..." />
                    <button className="post-comment">Publicar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .instagram-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
          position: relative;
        }

        .instagram-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(225, 48, 108, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(253, 29, 29, 0.05) 0%, transparent 50%);
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

        .profile-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex: 1;
        }

        .profile-avatar {
          position: relative;
          flex-shrink: 0;
        }

        .avatar {
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .verified-badge {
          position: absolute;
          bottom: 5px;
          right: 5px;
          background: #3897f0;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          border: 2px solid white;
        }

        .profile-info h2 {
          font-size: 2rem;
          color: #262626;
          margin: 0 0 0.5rem 0;
          font-weight: 300;
        }

        .profile-info p {
          color: #8e8e8e;
          margin: 0 0 1rem 0;
        }

        .profile-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          text-align: center;
        }

        .number {
          display: block;
          font-weight: bold;
          color: #262626;
          font-size: 1.1rem;
        }

        .label {
          font-size: 0.9rem;
          color: #8e8e8e;
        }

        .follow-btn {
          background: #3897f0;
          color: white;
          border: none;
          padding: 0.7rem 2rem;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .follow-btn:hover {
          background: #1877f2;
        }

        .highlight-stories {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding: 1rem 0;
        }

        .story-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          flex-shrink: 0;
        }

        .story-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, #833AB4, #C13584, #E1306C, #FD1D1D);
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-avatar {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .story-label {
          font-size: 0.8rem;
          color: #8e8e8e;
        }

        .feed-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .instagram-post {
          background: white;
          border: 1px solid #dbdbdb;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .instagram-post:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(45deg, #833AB4, #C13584);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: white;
        }

        .user-details {
          display: flex;
          flex-direction: column;
        }

        .user-details strong {
          color: #262626;
          font-size: 0.9rem;
        }

        .user-details span {
          color: #8e8e8e;
          font-size: 0.8rem;
        }

        .more-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #262626;
          cursor: pointer;
          padding: 0;
        }

        .post-image {
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .image-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(45deg, #833AB4, #C13584, #E1306C);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          position: relative;
        }

        .image-placeholder.large {
          height: 500px;
          font-size: 4rem;
        }

        .play-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 1rem;
          border-radius: 50%;
          font-size: 1.5rem;
        }

        .play-indicator.large {
          padding: 1.5rem;
          font-size: 2rem;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .post-image:hover .image-overlay {
          opacity: 1;
        }

        .engagement-stats {
          color: white;
          font-weight: bold;
          display: flex;
          gap: 1rem;
        }

        .post-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }

        .action-group {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.2rem;
          transition: transform 0.2s ease;
        }

        .action-btn:hover {
          transform: scale(1.1);
        }

        .like-btn.liked {
          animation: likeAnimation 0.3s ease;
        }

        @keyframes likeAnimation {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        .post-caption {
          padding: 0 1rem;
          margin-bottom: 0.5rem;
        }

        .post-caption p {
          margin: 0;
          color: #262626;
          line-height: 1.4;
        }

        .post-time {
          padding: 0 1rem 1rem;
          color: #8e8e8e;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .section-footer {
          text-align: center;
        }

        .view-more-btn {
          background: transparent;
          border: 1px solid #dbdbdb;
          color: #262626;
          padding: 1rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: bold;
        }

        .view-more-btn:hover {
          background: #fafafa;
          border-color: #262626;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .view-more-btn:hover .btn-arrow {
          transform: translateX(3px);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          background: white;
          border-radius: 8px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
        }

        .close-modal {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          font-size: 1.2rem;
        }

        .modal-post {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 500px;
        }

        .modal-image {
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-sidebar {
          display: flex;
          flex-direction: column;
          border-left: 1px solid #dbdbdb;
        }

        .modal-header {
          padding: 1rem;
          border-bottom: 1px solid #dbdbdb;
        }

        .modal-caption {
          padding: 1rem;
          flex: 1;
          overflow-y: auto;
        }

        .modal-caption p {
          margin: 0;
          line-height: 1.4;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-top: 1px solid #dbdbdb;
          border-bottom: 1px solid #dbdbdb;
        }

        .modal-stats {
          padding: 1rem;
          border-bottom: 1px solid #dbdbdb;
        }

        .likes {
          display: block;
          font-weight: bold;
          color: #262626;
          margin-bottom: 0.5rem;
        }

        .time {
          color: #8e8e8e;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .comment-section {
          padding: 1rem;
        }

        .comment-input {
          display: flex;
          gap: 0.5rem;
        }

        .comment-input input {
          flex: 1;
          border: 1px solid #dbdbdb;
          border-radius: 4px;
          padding: 0.5rem;
          outline: none;
        }

        .post-comment {
          background: #3897f0;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }

        /* Loading States */
        .post-skeleton {
          background: white;
          border: 1px solid #dbdbdb;
          border-radius: 8px;
          overflow: hidden;
        }

        .skeleton-image {
          height: 300px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
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
          .instagram-section {
            padding: 2rem 0;
          }

          .section-header {
            flex-direction: column;
            text-align: center;
          }

          .profile-header {
            flex-direction: column;
          }

          .profile-stats {
            justify-content: center;
          }

          .feed-grid {
            grid-template-columns: 1fr;
          }

          .modal-post {
            grid-template-columns: 1fr;
            height: auto;
            max-height: 80vh;
          }

          .modal-image {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .avatar {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }

          .profile-info h2 {
            font-size: 1.5rem;
          }

          .highlight-stories {
            gap: 1rem;
          }

          .story-ring {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramFeed;