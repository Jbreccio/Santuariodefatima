// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Seção Sobre */}
          <div className="footer-section">
            <h4>Santuário Nossa Senhora de Fátima</h4>
            <p className="footer-slogan">"Um lar para o coração, uma guia para a alma"</p>
            <div className="security-badge">
              🛡️ Site 100% Seguro
            </div>
          </div>

          {/* Seção Contato */}
          <div className="footer-section">
            <h5>Contato & Localização</h5>
            <div className="contact-info">
              <p>📍 Rua da Fé, 123 - Centro</p>
              <p>📞 (11) 9999-9999</p>
              <p>📧 contato@santuario-fatima.org</p>
              <p>🕒 Seg a Sex: 8h às 18h</p>
            </div>
          </div>

          {/* Seção Missas */}
          <div className="footer-section">
            <h5>Horários de Missa</h5>
            <div className="mass-times">
              <p><strong>Segunda a Sexta:</strong> 7:00 | 19:00</p>
              <p><strong>Sábado:</strong> 8:00 | 17:00</p>
              <p><strong>Domingo:</strong> 7:30 | 9:00 | 10:30 | 18:00</p>
            </div>
          </div>

          {/* Seção Links Rápidos */}
          <div className="footer-section">
            <h5>Links Rápidos</h5>
            <nav className="footer-links">
              <Link href="/missas">📅 Missas</Link>
              <Link href="/doacoes">💝 Doações</Link>
              <Link href="/pastorais">👥 Pastorais</Link>
              <Link href="/contato">📞 Contato</Link>
              <Link href="/calendario">📆 Calendário</Link>
              <Link href="/historia/paroquia">🏛️ Nossa História</Link>
            </nav>
          </div>

          {/* Seção Redes Sociais */}
          <div className="footer-section">
            <h5>Siga-nos</h5>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘 Facebook
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷 Instagram
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                ▶️ YouTube
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="footer-divider"></div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} Santuário Nossa Senhora de Fátima. 
              Todos os direitos reservados.
            </p>
            <p className="developed-by">
              Desenvolvido com 💚 para a comunidade católica
            </p>
            <div className="footer-security">
              <span className="security-indicator">🔒</span>
              <span>Site protegido com criptografia avançada</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a4a1c 0%, #2e7d32 100%);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          color: #d4af37;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .footer-section h5 {
          color: #d4af37;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .footer-slogan {
          font-style: italic;
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .security-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.2);
          border: 1px solid #d4af37;
          color: #d4af37;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .contact-info p,
        .mass-times p {
          margin: 0.5rem 0;
          opacity: 0.9;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s;
          opacity: 0.9;
        }

        .footer-links a:hover {
          opacity: 1;
          color: #d4af37;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .social-link {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s;
          opacity: 0.9;
        }

        .social-link:hover {
          opacity: 1;
          color: #d4af37;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 2rem 0;
        }

        .footer-bottom-content {
          text-align: center;
          opacity: 0.8;
        }

        .footer-bottom-content p {
          margin: 0.5rem 0;
        }

        .developed-by {
          font-style: italic;
        }

        .footer-security {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2rem 0 1rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-section {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;