// pages/secretaria.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Secretaria() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula o envio do formulário
    console.log('Dados do formulário:', formData);
    setEnviado(true);
    // Limpa o formulário
    setFormData({ nome: '', telefone: '', mensagem: '' });
    // Remove a notificação após 5 segundos
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Header />
      
      {/* Banner Hero */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Secretaria</h1>
        <p style={{ fontSize: '1.2rem' }}>Atendimento e informações da comunidade</p>
      </section>

      {/* Conteúdo Principal */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Grid com Informações e Formulário */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          
          {/* Informações da Secretaria */}
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            height: 'fit-content'
          }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '2rem', textAlign: 'center' }}>📋 Informações da Paróquia</h3>
            
            <div style={{ lineHeight: '1.8' }}>
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1e3a8a' }}>Forania:</strong><br/>
                Santo Amaro
              </div>

              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1e3a8a' }}>Fundação:</strong><br/>
                13/05/1996
              </div>

              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1e3a8a' }}>Pároco:</strong><br/>
                Pe. Giuberto Badiani<br/>
                <small>(Posse: 23/08/2014)</small>
              </div>

              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1e3a8a' }}>Endereço:</strong><br/>
                Rua Darwin, 651 – Santo Amaro<br/>
                04741-011 – São Paulo, SP
              </div>

              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1e3a8a' }}>Telefone:</strong><br/>
                11 5521-0312
              </div>

              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1e3a8a' }}>E-mail:</strong><br/>
                santuarionsradefatima@santoamaro.org.br
              </div>

              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1e3a8a' }}>Secretária:</strong><br/>
                Rose
              </div>

              <div>
                <strong style={{ color: '#1e3a8a' }}>Atendimento da Secretaria:</strong><br/>
                Terça-Feira à Sexta-Feira: 08h30 às 12h00 e 13h00 às 17h30<br/>
                Sábado: 08h00 às 12h00 e 13h00 às 17h00
              </div>
            </div>

            {/* Botão WhatsApp Fixo */}
            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem', 
              background: '#25D366', 
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <a 
                href="https://wa.me/551155210312" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  display: 'block'
                }}
              >
                💬 WhatsApp: (11) 5521-0312
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '2rem', textAlign: 'center' }}>✉️ Envie sua Mensagem</h3>
            
            {/* Notificação de Envio */}
            {enviado && (
              <div style={{
                padding: '1rem',
                background: '#d4edda',
                color: '#155724',
                border: '1px solid #c3e6cb',
                borderRadius: '5px',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                ✅ Sua mensagem foi enviada! Responderemos em breve.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Telefone *
                </label>
               