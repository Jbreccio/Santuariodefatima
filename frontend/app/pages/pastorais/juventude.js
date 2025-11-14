// pages/pastorais/juventude.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PastoralJuventude() {
  return (
    <div>
      <Header />
      
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pastoral da Juventude</h1>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="/images/juventude.jpg" 
              alt="Pastoral da Juventude"
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
              A Pastoral da Juventude busca integrar e envolver os jovens na vida da Igreja, 
              promovendo encontros, retiros, grupos de discussão e eventos sociais. Ela 
              trabalha para formar jovens líderes, incentivando-os a viver sua fé de maneira 
              ativa e a engajar-se em ações de serviço comunitário.
            </p>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>📧 Coordenação</h3>
              <a 
                href="mailto:juventude@santuariodefatima.net" 
                style={{ 
                  color: '#1e3a8a', 
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                juventude@santuariodefatima.net
              </a>
            </div>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px' 
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>👥 Voluntários</h3>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                Jovens (12 a 18 anos) e Adultos (19 a 30 anos) que queiram aprimorar sua 
                experiência espiritual e encontrar um novo grupo de amigos são bem-vindos. 
                Da mesma forma que paroquianos que tenham experiência de vida e disposição 
                de auxiliar na mentoria dos jovens e na organização de eventos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}