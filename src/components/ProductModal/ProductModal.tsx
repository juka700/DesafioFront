import type { Product } from '../../types/product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="modal-body">
          <img src={product.photo} alt={product.productName} />
          <div className="modal-details">
            <h2>{product.productName}</h2>
            <p className="price">{formattedPrice}</p>
            <p className="description">{product.descriptionShort}</p>
            <button className="buy-button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}