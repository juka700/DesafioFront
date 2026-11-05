import './HeroSection.scss';
import heroBg from '../../assets/hero.png';

export default function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <strong>50% Off</strong> <span>nos produtos</span>
        </p>
        <button type="button" className="hero-btn">
          Ver produto
        </button>
      </div>
    </section>
  );
}