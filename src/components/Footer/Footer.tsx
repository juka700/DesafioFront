import './Footer.scss';
import logoEconverse from '../../assets/soon.png'; // Logótipo da Econverse

// Importa as imagens das redes sociais que guardaste nos assets
// (Certifica-te de que os nomes dos ficheiros coincidem exatamente com os que tens na pasta)
import instagramIcon from '../../assets/instagram.png'; 
import facebookIcon from '../../assets/facebook.png'; 
import linkedinIcon from '../../assets/linkedin.png'; 

export default function Footer() {
  return (
    <footer className="footer">
      {/* 1. Seção de Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-inputs-group">
              <div className="input-row">
                <input type="text" placeholder="Digite seu nome" required />
                <input type="email" placeholder="Digite seu e-mail" required />
                <button type="submit" className="newsletter-btn">INSCREVER</button>
              </div>
              <label className="terms-label">
                <input type="checkbox" required />
                <span>Aceito os termos e condições</span>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* 2. Rodapé Principal com Links Interativos */}
      <div className="footer-main">
        <div className="footer-container">

          {/* Coluna Sobre / Logo / Redes Sociais */}
          <div className="footer-info">
            <div className="footer-logo-container" style={{ marginBottom: '16px' }}>
              <img 
                src={logoEconverse} 
                alt="Econverse" 
                style={{ maxWidth: '160px', height: 'auto', display: 'block' }} 
              />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            {/* Redes Sociais com as imagens importadas */}
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>

          {/* Coluna Institucional */}
          <div className="footer-links">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#movimento">Movimento</a></li>
              <li><a href="#trabalhe">Trabalhe conosco</a></li>
            </ul>
          </div>

          {/* Coluna Ajuda */}
          <div className="footer-links">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#suporte">Suporte</a></li>
              <li><a href="#fale">Fale Conosco</a></li>
              <li><a href="#perguntas">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Coluna Termos */}
          <div className="footer-links">
            <h4>Termos</h4>
            <ul>
              <li><a href="#termos">Termos e Condições</a></li>
              <li><a href="#privacidade">Política de Privacidade</a></li>
              <li><a href="#troca">Troca e Devolução</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Copyright inferior */}
      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}