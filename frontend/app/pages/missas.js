// pages/missas.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Missas() {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Horários de Missas</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Celebre conosco a Eucaristia e fortaleça sua fé em comunidade
        </p>
      </section>

      {/* Conteúdo Principal */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Container Principal */}
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          lineHeight: '1.8',
          fontSize: '1.1rem'
        }}>
          
          {/* Horários Regulares */}
          <h2 style={{ color: '#1e3a8a', marginBottom: '2rem', textAlign: 'center' }}>
            ⛪ Horários Regulares de Missas
          </h2>
          
          {/* Grid de Horários */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Domingo */}
            <div style={{ 
              padding: '2rem', 
              background: '#f8f9fa', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid #1e3a8a'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>📅 Domingo</h3>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                <div style={{ marginBottom: '1rem' }}>🕗 08h00 - Missa da Manhã</div>
                <div style={{ marginBottom: '1rem' }}>🕙 10h00 - Missa Familiar</div>
                <div style={{ marginBottom: '1rem' }}>🕛 12h00 - Missa em Espanhol</div>
                <div>🕡 18h30 - Missa da Noite</div>
              </div>
            </div>

            {/* Segunda a Sexta */}
            <div style={{ 
              padding: '2rem', 
              background: '#f8f9fa', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid #1e3a8a'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>📅 Segunda a Sexta</h3>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                <div style={{ marginBottom: '1rem', padding: '0.5rem', background: '#e9ecef', borderRadius: '5px' }}>
                  <strong>Terça-feira:</strong><br/>🕢 7h30 e 🕢 19h30
                </div>
                <div style={{ marginBottom: '1rem', padding: '0.5rem', background: '#e9ecef', borderRadius: '5px' }}>
                  <strong>Quarta-feira:</strong><br/>🕢 19h30
                </div>
                <div style={{ marginBottom: '1rem', padding: '0.5rem', background: '#e9ecef', borderRadius: '5px' }}>
                  <strong>Quinta-feira:</strong><br/>🕢 7h30 e 🕢 19h30
                </div>
                <div style={{ padding: '0.5rem', background: '#e9ecef', borderRadius: '5px' }}>
                  <strong>Sexta-feira:</strong><br/>🕢 19h30
                </div>
              </div>
            </div>

            {/* Sábado */}
            <div style={{ 
              padding: '2rem', 
              background: '#f8f9fa', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid #1e3a8a'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>📅 Sábado</h3>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                <div style={{ marginBottom: '1rem' }}>🕟 16h30 - Missa Antecipada do Domingo</div>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#666' }}>
                * Missa com bênção especial para as famílias
              </p>
            </div>
          </div>

          {/* Missas Especiais */}
          <div style={{ 
            padding: '2rem', 
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '2rem'
          }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>✨ Missas Especiais e Sacramentos</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>👼 Batizados</h4>
                <p style={{ margin: 0 }}>Domingos às 09h<br/>(com agendamento)</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>💒 Casamentos</h4>
                <p style={{ margin: 0 }}>Sábados às 14h<br/>(com agendamento)</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>⛪ Primeiras Sextas</h4>
                <p style={{ margin: 0 }}>Missa especial às 19h30<br/>com Adoração ao Santíssimo</p>
              </div>
            </div>
          </div>

          {/* Informações Importantes */}
          <div style={{ 
            padding: '2rem', 
            background: '#fff3cd', 
            borderRadius: '10px',
            border: '1px solid #ffeaa7'
          }}>
            <h3 style={{ color: '#856404', marginBottom: '1rem', textAlign: 'center' }}>ℹ️ Informações Importantes</h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>Chegue com 10-15 minutos de antecedência</li>
              <li style={{ marginBottom: '0.5rem' }}>Traje adequado para o ambiente sagrado</li>
              <li style={{ marginBottom: '0.5rem' }}>Missas especiais serão anunciadas com antecedência</li>
              <li>Domingo às 12h: Missa em Espanhol para comunidade hispânica</li>
            </ul>
          </div>

          {/* Contato para Dúvidas */}
          <div style={{ 
            marginTop: '2rem', 
            padding: '1.5rem', 
            background: '#f8f9fa', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>📞 Dúvidas sobre horários?</h4>
            <p style={{ margin: 0, fontSize: '1rem' }}>
              Entre em contato com a secretaria: <strong>(11) 1234-5678</strong><br/>
              Ou envie email: <strong>secretaria@santuariodefatima.net</strong>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}