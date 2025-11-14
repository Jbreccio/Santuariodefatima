// pages/pastorais/social.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PastoralSocial() {
  return (
    <div>
      <Header />
      
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pastoral Social</h1>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="/images/social.jpg" 
              alt="Pastoral Social"
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
              A Pastoral Social é focada na promoção da justiça social e na assistência aos 
              pobres e necessitados. Ela organiza e coordena programas de caridade, como 
              distribuição de alimentos, roupas, assistência jurídica e médica, além de 
              projetos de desenvolvimento comunitário. A pastoral busca conscientizar a 
              comunidade sobre questões sociais e promover ações de solidariedade. Outra 
              frente dessa pastoral trata da organização de nosso bazar e de campanhas de 
              arrecadação de alimentos e itens de higiene para distribuição a comunidade 
              carente atendida pelo Santuário.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>📧 Coordenações</h3>
              <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Bazar e Campanhas:</strong>{' '}
                  <a href="mailto:social@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                    social@santuariodefatima.net
                  </a>
                </div>
                <div>
                  <strong>Eventos:</strong>{' '}
                  <a href="mailto:eventos@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                    eventos@santuariodefatima.net
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
                Pessoas para organização de bazares, campanhas de arrecadação e eventos 
                sociais para captação de recursos e congregação da comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}