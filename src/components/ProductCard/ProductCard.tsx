import type { Product } from '../../types/product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  // Formata o preço para o padrão brasileiro (R$)
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Calcula um valor antigo simulado (ex: 20% acima do preço atual) para exibir riscado
  const oldPrice = product.price * 1.2;

  return (
    <div className="product-card" onClick={onSelect}>
      <div className="product-image-container">
        <img src={product.photo} alt={product.productName} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.productName}</h3>

        <div className="product-prices">
          <span className="old-price">{formatPrice(oldPrice)}</span>
          <span className="current-price">{formatPrice(product.price)}</span>
        </div>

        <p className="installments">
          ou 2x de R$ {(product.price / 2).toFixed(2).replace('.', ',')} sem juros
        </p>

        <span className="shipping">Frete grátis</span>

        <button type="button" className="buy-button">
          COMPRAR
        </button>
      </div>
    </div>
  );
}