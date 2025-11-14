// pages/_app.js - Versão Corrigida
import '../styles/globals.css';
import SecuritySystem from '../components/SecuritySystem';
import { useEffect } from 'react';

function SantuarioApp({ Component, pageProps }) {
  
  useEffect(() => {
    // Log de inicialização apenas no cliente
    console.log(' Santuário Nossa Senhora de Fátima');
    console.log(' Sistema de segurança carregado');
    
    console.log('%c Bem-vindo ao site do Santuário!', 
      'font-size: 20px; color: #1e3a8a; font-weight: bold;'
    );
  }, []);

  return (
    <>
      {/* Sistema de Segurança - apenas no cliente */}
      <SecuritySystem 
        enableStrictMode={false}
      />
      
      {/* Página atual */}
      <Component {...pageProps} />
    </>
  );
}

export default SantuarioApp;