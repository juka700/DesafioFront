import './Header.scss';

// Importa a logo e os ícones corretos da pasta assets
import logoImg from '../../assets/soon.png';
import iconTruck from '../../assets/truck.png';
import iconCrown from '../../assets/crown.png';

export default function Header() {
  return (
    <header className="site-header">
      {/* 1. Top Bar */}
      <div className="header-top-bar">
        <div className="top-bar-container">
          <div className="top-bar-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9f9f9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span>Compra <strong>100% segura</strong></span>
          </div>

          <div className="top-bar-item">
            <img src={iconTruck} alt="Frete" className="top-bar-icon" />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>

          <div className="top-bar-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9f9f9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div className="header-main">
        <div className="header-main-container">
          <div className="logo-area">
            <img src={logoImg} alt="Econverse" className="logo-img" />
          </div>

          <div className="search-bar">
            <input type="text" placeholder="O que você está buscando?" />
            <button type="button" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9f9f9f" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="header-actions">
            <button type="button" title="Meus Pedidos">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </button>

            <button type="button" title="Favoritos">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <button type="button" title="Minha Conta">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

            <button type="button" title="Carrinho">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Categories Bar */}
      <nav className="header-categories">
        <ul>
          <li>TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li>LANÇAMENTOS</li>
          <li className="active">OFERTAS DO DIA</li>
          <li className="highlight">
            <img src={iconCrown} alt="Assinatura" className="crown-icon" />
            <span>ASSINATURA</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}