import './PartnerBanners.scss';
import maskBg from '../../assets/MaskGroup.png'; 

export default function PartnerBanners() {
  return (
    <section className="partner-section">
      <div className="partner-container">

        {/* Banner 1 */}
        <div className="partner-card" style={{ backgroundImage: `url(${maskBg})` }}>
          <div className="partner-overlay"></div>
          <div className="partner-content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="partner-btn">CONFIRA</button>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="partner-card" style={{ backgroundImage: `url(${maskBg})` }}>
          <div className="partner-overlay"></div>
          <div className="partner-content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="partner-btn">CONFIRA</button>
          </div>
        </div>

      </div>
    </section>
  );
}