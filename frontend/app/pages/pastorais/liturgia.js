// pages/pastorais/liturgica.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PastoralLiturgica() {
  return (
    <div>
      <Header />
      
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pastoral Litúrgica</h1>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="/images/liturgica.jpg" 
              alt="Pastoral Litúrgica"
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
              A Pastoral Litúrgica é responsável pela organização e preparação das 
              celebrações litúrgicas, como missas, sacramentos e outros ritos religiosos. Ela 
              coordena a preparação de leituras, coroinhas, marianinhas, acólitos, ministros 
              extraordinários da Eucaristia e a música litúrgica, garantindo que as 
              celebrações sejam dignas e bem-organizadas, facilitando a participação ativa 
              dos fiéis.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>👥 Grupos da Pastoral</h3>
              <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '5px', marginBottom: '1rem' }}>
                <strong>Coroinhas e Marianinhas:</strong> Crianças e jovens a partir dos 7 anos<br/>
                <strong>Acólitos:</strong> Garotos catequisados após 2-3 anos de serviço<br/>
                <strong>Ministros Extraordinários:</strong> Maiores de 18 anos aprovados em formação<br/>
                <strong>Músicos:</strong> Paroquianos com habilidade musical
              </div>
            </div>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>📧 Coordenações</h3>
              <div>
                <strong>Coroinhas e Acólitos:</strong>{' '}
                <a href="mailto:coroinhas@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                  coroinhas@santuariodefatima.net
                </a>
              </div>
              <div>
                <strong>Ministros Extraordinários:</strong>{' '}
                <a href="mailto:ministros@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                  ministros@santuariodefatima.net
                </a>
              </div>
              <div>
                <strong>Música:</strong>{' '}
                <a href="mailto:musica@santuariodefatima.net" style={{ color: '#1e3a8a' }}>
                  musica@santuariodefatima.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}