// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarrosselFotos from '../components/CarrosselFotos';
import ImagemNossaSenhora from '../components/ImagemNossaSenhora';
import VaticanNews from '../components/VaticanNews';
import VaticanNewsCards from '../components/VaticanNewsCards';
import RedesSociais from '../components/RedesSociais';
import TransmissaoHome from '../components/TransmissaoHome';
import LiturgiaDiaria from '../components/LiturgiaDiaria';
import SantoDoDia from '../components/SantoDoDia';
import BuscarSantoAvancado from '../components/BuscarSantoAvancado';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Header />
      
      {/* SEÇÃO 1: Carrossel + Imagem Nossa Senhora */}
      <section style={{ 
        padding: '20px', 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '20px',
        alignItems: 'start'
      }}>
        <CarrosselFotos />
        <ImagemNossaSenhora />
      </section>

      {/* SEÇÃO 2: Vatican News - Título linha inteira */}
      <section style={{ padding: '0 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <VaticanNews />
      </section>

      {/* SEÇÃO 3: Vatican News Cards - linha inteira */}
      <section style={{ padding: '0 20px 20px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <VaticanNewsCards />
      </section>

      {/* SEÇÃO 4: Redes Sociais + Transmissão + Liturgia */}
      <section style={{ 
        padding: '20px', 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '300px 1fr 280px',
        gap: '20px',
        alignItems: 'start'
      }}>
        <RedesSociais />
        <TransmissaoHome />
        <LiturgiaDiaria />
      </section>

      {/* SEÇÃO 5: Santo do Dia + Busca Santo */}
      <section style={{ 
        padding: '20px', 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        alignItems: 'start'
      }}>
        <SantoDoDia />
        <BuscarSantoAvancado />
      </section>

      <Footer />
    </div>
  );
}