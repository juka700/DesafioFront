import './BrandsSection.scss';
// Se tiveres a imagem do logo exportada do Figma, podes importá-la aqui:
// import logoEconverse from '../../assets/logo-econverse.png';

export default function BrandsSection() {
  const brands = [1, 2, 3, 4, 5];

  return (
    <section className="brands-section">
      <h2 className="brands-title">Navegue por marcas</h2>
      
      <div className="brands-container">
        {brands.map((_, index) => (
          <div key={index} className="brand-card">
            {/* Caso tenhas o asset do logo, substitui a tag span abaixo por: */}
            {/* <img src={logoEconverse} alt="Econverse" /> */}
            <span className="brand-logo-text">
              <span className="ec-yellow">e</span>converse
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}