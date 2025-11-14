import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PastoralAcolhida() {
  return (
    <div>
      <Header />
      
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pastoral da Acolhida</h1>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
          
          <div style={{ flex: '0 0 400px' }}>
            <img 
              src="/images/acolhida.jpg" 
              alt="Pastoral da Acolhida"
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>Sobre a Pastoral</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
              A Pastoral da Acolhida é responsável por receber e integrar novos membros da 
              comunidade paroquial, garantindo que todos se sintam bem-vindos. Ela coordena a recepção 
              dos fiéis nas celebrações, eventos e encontros, e também promove atividades para integrar 
              novos paroquianos à vida comunitária.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#1e3a8a' }}>📧 Coordenação</h3>
              <a href="mailto:acolhida@santuariodefatima.net" style={{ color: '#1e3a8a', fontSize: '1.1rem' }}>
                acolhida@santuariodefatima.net
              </a>
            </div>

            <div>
              <h3 style={{ color: '#1e3a8a' }}>👥 Voluntários</h3>
              <p>Pessoas com habilidades interpessoais e desejo de ajudar o próximo</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}