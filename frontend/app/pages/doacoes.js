// pages/doacoes.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Doacoes() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Header />
      <section style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Doações</h1>
      </section>
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '3rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#1e3a8a', textAlign: 'center' }}>💝 Faça sua Doação</h3>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>Em breve informações sobre como fazer doações para nosso santuário.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}