// pages/historia/santuariodefatima.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SantuarioDeFatima() {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Santuário Nossa Senhora de Fátima</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Santo Amaro - São Paulo | Fundado em 13 de maio de 1996
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
          
          {/* História do Santuário */}
          <h2 style={{ color: '#1e3a8a', marginBottom: '2rem', textAlign: 'center' }}>
            História do Santuário Nossa Senhora de Fátima — Santo Amaro
          </h2>
          
          <p style={{ marginBottom: '1.5rem' }}>
            O Santuário Nossa Senhora de Fátima está localizado na Rua Darwin, 651, no bairro de 
            Santo Amaro, em São Paulo. Foi oficialmente fundado em 13 de maio de 1996 e é um 
            importante ponto de referência religiosa e comunitária da Diocese de Santo Amaro.
          </p>

          {/* Arquitetura e Obras */}
          <div style={{ marginBottom: '2rem', padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>🏗️ Arquitetura e Modernização</h3>
            <p style={{ marginBottom: '1rem' }}>
              A construção e o projeto arquitetônico do santuário foram pensados para valorizar 
              a liturgia e o simbolismo sacro. Em anos recentes o templo passou por obras de 
              modernização e retrofit, com atenção especial à renovação da fachada e do interior, 
              mantendo elementos de arte sacra e promovendo maior acessibilidade e conforto para os fiéis.
            </p>
            <p>
              O projeto arquitetônico que acompanhou essas intervenções contou com a participação 
              da <strong>Creatos Arquitetura</strong> (arquitetos Tobias Bonk Machado e Teresa Cristina Cavaco Gomes).
            </p>
          </div>

          {/* Atuação Comunitária */}
          <div style={{ marginBottom: '2rem', padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>👥 Atuação Comunitária e Pastoral</h3>
            <p style={{ marginBottom: '1rem' }}>
              Ao longo dos anos, o Santuário consolidou-se como espaço de celebrações, devoção e 
              atividades comunitárias — promovendo missas regulares, grupos de oração e eventos 
              tradicionais, como a conhecida festa junina que atrai moradores da região.
            </p>
            <p>
              Além de sua função litúrgica, o santuário atua também em iniciativas sociais e 
              pastorais voltadas à população local, mantendo um compromisso constante com a 
              evangelização e o serviço à comunidade.
            </p>
          </div>

          {/* Informações de Contato */}
          <div style={{ 
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
            color: 'white',
            padding: '2rem', 
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📞 Informações e Contato</h3>
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>📍 Endereço</h4>
              <p style={{ margin: 0, fontSize: '1.1rem' }}>
                Rua Darwin, 651 — Santo Amaro, São Paulo
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>🌐 Comunicação</h4>
              <p style={{ margin: 0, fontSize: '1.1rem' }}>
                A comunidade mantém presença ativa nas redes sociais e canais oficiais da Diocese, 
                onde divulgam programação de missas, eventos e ações pastorais.
              </p>
            </div>
          </div>

          {/* Destaques */}
          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⛪</div>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Fundação</h4>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                13 de maio de 1996<br/>
                Data significativa ligada às aparições de Fátima
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏙️</div>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Localização</h4>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Santo Amaro, São Paulo<br/>
                Diocese de Santo Amaro
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Comunidade</h4>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Ativa e engajada<br/>
                Missas, eventos e ações sociais
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}