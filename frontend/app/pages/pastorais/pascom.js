// pages/pastorais/pascom.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PastoralPascom() {
  return (
    <div>
      <Header />
      
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pastoral da Comunicação (PASCOM)</h1>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="/images/pascom.jpg" 
              alt="Pastoral da Comunicação"
              style={{ 
                width: '100%', 
                height: '300px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                backgroundColor: '#f8f9fa'
              }}
            />
          </div>

          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>Sobre a Pastoral</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
              A Pastoral da Comunicação é responsável por disseminar informações e 
              notícias da paróquia, utilizando diversos meios, como boletins, sites, redes 
              sociais e outros recursos de mídia. Esta pastoral busca promover a 
              evangelização e a integração da comunidade paroquial, garantindo que todos 
              estejam informados sobre as atividades e eventos da igreja.
            </p>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>📧 Coordenação</h3>
              <a 
                href="mailto:pascom@santuariodefatima.net" 
                style={{ 
                  color: '#1e3a8a', 
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                pascom@santuariodefatima.net
              </a>
            </div>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px' 
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>👥 Voluntários</h3>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                Paroquianos com habilidades ou com desejo de desenvolver habilidades em 
                filmagem, fotografia, redes sociais e projeção durante as missas são 
                especialmente bem-vindos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}