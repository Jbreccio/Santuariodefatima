// components/Header.js
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isHistoriaOpen, setIsHistoriaOpen] = useState(false);
  const [isPastoraisOpen, setIsPastoraisOpen] = useState(false);

  return (
    <header style={{
      position: 'relative',
      background: '#FF9A8B',
      background: 'linear-gradient(135deg, #FF9A8B 0%, #FF6B6B 100%)',
      boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* Logo */}
        <Link href="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#000',
          textDecoration: 'none'
        }}>
          Santuário Nossa Senhora de Fátima
        </Link>

        {/* Menu Principal */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          position: 'relative',
          flexWrap: 'wrap'
        }}>
          
          <Link href="/" style={{
            textDecoration: 'none',
            color: '#000',
            fontWeight: '600',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'all 0.3s ease',
            fontSize: '0.9rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
          }}
          >
            Home
          </Link>

          {/* Dropdown História */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsHistoriaOpen(true)}
            onMouseLeave={() => setIsHistoriaOpen(false)}
          >
            <button style={{
              background: 'none',
              border: 'none',
              color: '#000',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
            }}
            >
              História
              <span style={{ 
                transform: isHistoriaOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>
                ▼
              </span>
            </button>

            {isHistoriaOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '0.5rem 0',
                minWidth: '220px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                zIndex: 1001
              }}>
                <Link 
                  href="/historia/nossasenhoradefatima" 
                  style={{
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    color: '#333',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    borderBottom: '1px solid #f0f0f0',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#333';
                  }}
                >
                  Nossa Senhora de Fátima
                </Link>

                <Link 
                  href="/historia/santuariodefatima" 
                  style={{
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    color: '#333',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#333';
                  }}
                >
                  Santuário de Fátima
                </Link>
              </div>
            )}
          </div>

          {/* Links diretos */}
          {['Pastorais', 'Missas', 'Eventos', 'Dia de Cada Santo', 'Doações', 'Localização', 'Secretaria', 'Sobre Nós'].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, '')}`}
              style={{
                textDecoration: 'none',
                color: '#000',
                fontWeight: '600',
                padding: '0.5rem 0.75rem',
                borderRadius: '5px',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              {item}
            </Link>
          ))}

        </div>
      </nav>
    </header>
  );
}