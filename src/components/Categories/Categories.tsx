import './Categories.scss';
import toolsImg from '../../assets/tools.png'; // Substitui pelo caminho correto se necessário

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="categories-container">
        <img src={toolsImg} alt="Categorias" className="categories-image" />
      </div>
    </section>
  );
}