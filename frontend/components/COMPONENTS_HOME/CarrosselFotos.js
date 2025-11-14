// components/COMPONENTES_HOME/CarrosselFotos.js
import { useState, useEffect } from 'react';

const CarrosselFotos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fotos = [
    {
      id: 1,
      image: '/api/placeholder/800/400',
      title: 'Celebração Dominical',
      description: 'Missa de domingo com a comunidade'
    },
    {
      id: 2, 
      image: '/api/placeholder/800/400',
      title: 'Batizados',
      description: 'Momento especial de batizado'
    },
    {
      id: 3,
      image: '/api/placeholder/800/400',
      title: 'Eventos Comunitários',
      description: 'Encontros e festas da paróquia'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % fotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [fotos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <section className="carrossel-section">
      <div className="section-header">
        <h2>📸 Momentos do Santuário</h2>
        <p>Nossa comunidade em celebração</p>
        <div className="header-decoration"></div>
      </div>

      <div className="carrossel-container">
        <div className="carrossel-wrapper">
          {fotos.map((foto, index) => (
            <div
              key={foto.id}
              className={`carrossel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-image">
                <div className="image-placeholder">
                  🏛️ {foto.title}
                </div>
                <div className="slide-overlay">
                  <div className="slide-content">
                    <h3>{foto.title}</h3>
                    <p>{foto.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carrossel-btn prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carrossel-btn next" onClick={nextSlide}>
          ›
        </button>

        <div className="carrossel-indicators">
          {fotos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .carrossel-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        .carrossel-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(46, 125, 50, 0.05) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #2e7d32;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .header-decoration {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #2e7d32, #d4af37);
          margin: 0 auto;
          border-radius: 2px;
          position: relative;
        }

        .header-decoration::after {
          content: '✝';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 0 10px;
          color: #2e7d32;
          font-size: 1.2rem;
        }

        .carrossel-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(46, 125, 50, 0.1);
        }

        .carrossel-wrapper {
          display: flex;
          transition: transform 0.5s ease-in-out;
          height: 400px;
        }

        .carrossel-slide {
          min-width: 100%;
          position: relative;
          display: none;
        }

        .carrossel-slide.active {
          display: block;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(135deg, #1a4a1c, #2e7d32);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          background: linear-gradient(45deg, #1a4a1c, #2e7d32, #1a4a1c);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 2rem;
          color: white;
        }

        .slide-content h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #d4af37;
        }

        .slide-content p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .carrossel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .carrossel-btn:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .carrossel-btn.prev {
          left: 20px;
        }

        .carrossel-btn.next {
          right: 20px;
        }

        .carrossel-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #d4af37;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .carrossel-section {
            padding: 2rem 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .carrossel-wrapper {
            height: 300px;
          }

          .carrossel-btn {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .slide-content h3 {
            font-size: 1.4rem;
          }

          .slide-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CarrosselFotos;