// pages/pastorais/catequese.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PastoralCatequese() {
  return (
    <div>
      <Header />
      
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pastoral da Catequese</h1>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="/images/catequese.jpg" 
              alt="Pastoral da Catequese"
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
              A Pastoral da Catequese é dedicada à formação religiosa dos membros da 
              paróquia, especialmente crianças, adolescentes e adultos que se preparam 
              para receber os sacramentos da Iniciação Cristã (Batismo, Eucaristia e 
              Crisma). Esta pastoral organiza cursos, aulas, encontros de catequese e retiros 
              espirituais, ajudando os catequizados a aprofundar seu conhecimento da fé e 
              sua vida espiritual.
            </p>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>📧 Coordenação</h3>
              <a 
                href="mailto:catequese@santuariodefatima.net" 
                style={{ 
                  color: '#1e3a8a', 
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                catequese@santuariodefatima.net
              </a>
            </div>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px' 
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>👥 Voluntários</h3>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                Voluntários com habilidades didáticas ou com o desejo de desenvolvê-las 
                são especialmente bem-vindos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}