import { useEffect, useState } from 'react';
import type { Product, ProductsResponse } from './types/product';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Categories from './components/Categories/Categories';
import PartnerBanners from './components/PartnerBanners/PartnerBanners';
import BrandsSection from './components/BrandsSection/BrandsSection';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import ProductModal from './components/ProductModal/ProductModal';

// Ficheiros de estilo e imagens
import './App.css';
import relatedTitleImg from './assets/Related productstwo.png'; // Imagem com "Produtos relacionados / Ver todos"

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
        );
        const data: ProductsResponse = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <Categories />

      {/* --- 1º BLOCO: Produtos Relacionados COM ABAS (no topo) --- */}
      <main style={{ padding: '20px 20px 40px 20px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#3014b8', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
            Produtos relacionados
          </h2>

          {/* Barra de Abas Horizontais */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid #dedede',
            borderRadius: '4px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'].map((tab, idx, arr) => (
              <button 
                key={tab}
                style={{
                  flex: 1,
                  padding: '14px 12px',
                  background: 'transparent',
                  border: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: idx === 0 ? '#3014b8' : '#3f3f3f',
                  cursor: 'pointer',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  borderRight: idx < arr.length - 1 ? '1px solid #dedede' : 'none',
                  borderBottom: idx === 0 ? '3px solid #3014b8' : 'none'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 1ª Fila de Produtos (4 itens) */}
        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>Carregando produtos...</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '20px'
          }}>
            {products.slice(0, 4).map((product, index) => (
              <ProductCard
                key={`first-${index}`}
                product={product}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </main>

      {/* --- 2º BLOCO: Banners de Parceiros no Meio --- */}
      <PartnerBanners />

      {/* --- 3º BLOCO: Produtos Relacionados COM A IMAGEM "VER TODOS" --- */}
      <main style={{ padding: '40px 20px 40px 20px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '24px' }}>
          <img 
            src={relatedTitleImg} 
            alt="Produtos relacionados - Ver todos" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>

        {/* Fila de Produtos (4 itens) */}
        {!loading && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '20px'
          }}>
            {products.slice(0, 4).map((product, index) => (
              <ProductCard
                key={`second-${index}`}
                product={product}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </main>

      {/* --- 4º BLOCO: Secção Navegue por Marcas --- */}
      <BrandsSection />

      {/* --- 5º BLOCO: Última Secção de Produtos Relacionados --- */}
      <main style={{ padding: '20px 20px 60px 20px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '24px' }}>
          <img 
            src={relatedTitleImg} 
            alt="Produtos relacionados - Ver todos" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>

        {/* Fila de Produtos final (4 itens) */}
        {!loading && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '20px'
          }}>
            {products.slice(0, 4).map((product, index) => (
              <ProductCard
                key={`third-${index}`}
                product={product}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}

        {/* Modal de detalhes ao clicar no produto */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </main>

      {/* --- RODAPÉ COMPLETO (Newsletter + Footer institucional) --- */}
      <Footer />
    </div>
  );
}