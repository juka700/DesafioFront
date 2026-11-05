import './RelatedSection.scss';
import relatedTitleImg from '../../assets/Related productstwo.png'; // Ajusta o nome se necessário

export default function RelatedSection() {
  return (
    <div className="related-section-header">
      {/* Imagem exportada do Figma com o título e as linhas laterais */}
      <div className="title-image-container">
        <img src={relatedTitleImg} alt="Produtos relacionados" />
      </div>

      {/* Abas de categorias (Celular, Acessórios, etc.) */}
      <div className="related-tabs">
        <button className="tab active">CELULAR</button>
        <button className="tab">ACESSÓRIOS</button>
        <button className="tab">TABLETS</button>
        <button className="tab">NOTEBOOKS</button>
        <button className="tab">TVS</button>
        <button className="tab">VER TODOS</button>
      </div>
    </div>
  );
}