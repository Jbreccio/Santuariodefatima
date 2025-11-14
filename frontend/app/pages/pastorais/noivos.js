// pages/pastorais/noivos.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PastoralNoivos() {
  return (
    <div>
      <Header />
      
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pastoral dos Noivos</h1>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="/images/noivos.jpg" 
              alt="Pastoral dos Noivos"
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
              A Pastoral dos Noivos é dedicada a acompanhar os casais que se preparam para 
              receber o Sacramento do Matrimônio. Através de encontros formativos, a pastoral 
              ajuda os noivos a refletirem sobre aspectos importantes da vida conjugal, 
              como comunicação, fé, planejamento familiar, finanças e espiritualidade. 
              Nossa missão é fortalecer os alicerces do futuro casamento, formando casais 
              conscientes de sua vocação e comprometidos com uma união abençoada por Deus.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>📧 Coordenações</h3>
              <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Coordenação Geral:</strong>{' '}
                  <a href="mailto:noivos@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                    noivos@santuariodefatima.net
                  </a>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Encontros Preparatórios:</strong>{' '}
                  <a href="mailto:encontros.noivos@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                    encontros.noivos@santuariodefatima.net
                  </a>
                </div>
                <div>
                  <strong>Agendamentos:</strong>{' '}
                  <a href="mailto:matrimonio@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                    matrimonio@santuariodefatima.net
                  </a>
                </div>
              </div>
            </div>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px' 
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>👥 Voluntários</h3>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                Casais já casados na Igreja que desejam partilhar suas experiências, 
                coordenadores de encontros, pessoas para organização logística e acolhimento 
                dos noivos. É necessário participar da formação para casais acompanhantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}