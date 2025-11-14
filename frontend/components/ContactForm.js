// components/contactForm.js
import { useState } from 'react';
import ReactShield from '../utils/reactShield';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 🔐 Protege os dados antes de enviar
      const protectedData = ReactShield.protectElement 
        ? ReactShield.protectElement(formData)
        : formData;

      console.log('📤 Enviando dados protegidos:', protectedData);
      
      // Simula envio para o backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('❌ Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container protegido">
      <h3>Entre em Contato</h3>
      <p>Envie sua mensagem para o Santuário Nossa Senhora de Fátima</p>
      
      {submitStatus === 'success' && (
        <div className="alert alert-success">
          ✅ Mensagem enviada com sucesso! Retornaremos em breve.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert alert-danger">
          ❌ Erro ao enviar mensagem. Tente novamente.
        </div>
      )}

      <form onSubmit={handleSubmit} className="protected-form">
        <div className="form-group">
          <label htmlFor="nome">Nome Completo *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
          />
        </div>

        <div className="form-group">
          <label htmlFor="assunto">Assunto *</label>
          <select
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um assunto</option>
            <option value="missas">Horários de Missa</option>
            <option value="batismo">Batismo</option>
            <option value="casamento">Casamento</option>
            <option value="doacoes">Doações</option>
            <option value="pastorais">Pastorais</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem *</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="security-loading"></span>
              Enviando...
            </>
          ) : (
            '📤 Enviar Mensagem'
          )}
        </button>

        <div className="security-badge">
          🔒 Formulário Protegido
        </div>
      </form>
    </div>
  );
};

export default ContactForm;