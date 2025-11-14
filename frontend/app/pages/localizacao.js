// pages/localizacao.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Localizacao() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <Header />
      
      {/* Banner Hero */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Localização</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Venha nos visitar e fazer parte da nossa comunidade
        </p>
      </section>

      {/* Conteúdo Principal */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          
          {/* Endereço */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>📍 Endereço</h2>
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', lineHeight: '1.6' }}>
              <p style={{ margin: '0.5rem 0' }}>Rua Darwin, 651 – Santo Amaro</p>
              <p style={{ margin: '0.5rem 0' }}>04741-011 – São Paulo, SP</p>
            </div>
          </div>

          {/* Mapa Google Maps */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem', textAlign: 'center' }}>🗺️ Como Chegar</h3>
            
            {/* Mapa do Google Maps Embed */}
            <div style={{ 
              width: '100%', 
              height: '400px', 
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.234376238402!2d-46.72231192457901!3d-23.753821466000287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f8e9aa0e0a7%3A0x5d15c1c1b5b0b0b0!2sRua%20Darwin%2C%20651%20-%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004741-011!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Santuário Nossa Senhora de Fátima"
              >
              </iframe>
            </div>
          </div>

          {/* Informações de Acesso */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚗</div>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Estacionamento</h4>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Estacionamento gratuito<br/>
                disponível no local
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚌</div>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Transporte Público</h4>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Fácil acesso por ônibus<br/>
                e metrô (próximo à estação)
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>♿</div>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Acessibilidade</h4>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Totalmente acessível<br/>
                para pessoas com deficiência
              </p>
            </div>
          </div>

          {/* Contato */}
          <div style={{ 
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)',
            color: 'white',
            padding: '2rem', 
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📞 Contato</h3>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Telefone:</strong> (11) 1234-5678
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Email:</strong> contato@santuariodefatima.net
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Secretaria:</strong> Segunda a Sexta, 8h às 17h
              </p>
            </div>
          </div>

        </div>

        {/* Horários de Funcionamento */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem', textAlign: 'center' }}>⏰ Horários de Funcionamento</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            textAlign: 'center'
          }}>
            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Secretaria</h4>
              <p style={{ margin: 0 }}>Segunda a Sexta<br/>8h às 12h | 13h às 17h</p>
            </div>
            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Igreja</h4>
              <p style={{ margin: 0 }}>Todos os dias<br/>6h30 às 20h</p>
            </div>
            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Confissões</h4>
              <p style={{ margin: 0 }}>Sextas-feiras<br/>19h às 20h</p>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}