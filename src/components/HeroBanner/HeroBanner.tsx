import './HeroBanner.scss';
import bannerImage from '../../assets/hero.png'; // ou o nome exato da imagem principal

export default function HeroBanner() {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="hero-content">
        <h1>Venha conhecer nossas promoções</h1>
        <p>50% Off nos produtos</p>
        <button className="hero-button">Ver produto</button>
      </div>
    </section>
  );
}