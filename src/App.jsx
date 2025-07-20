import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getAllProducts } from './api/productService';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import ShoppingSection from './pages/shoppage';
import CartPage from './pages/cart';
import ProductModal from './components/productModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [productSearched, setProductSearched] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProduct, setCartProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setProductSearched(query);
    navigate('/search');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    if (!cartProduct.some(p => p.id === product.id)) {
      setCartProduct(prev => [...prev, { ...product, quantity: 1 }]);
    }
    setSelectedProduct(null) ;
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={
          <HomePage
            products={products}
            onProductClick={handleProductClick}
            onSearch={handleSearch}
          />
        } />
        <Route path="/search" element={
          <ShoppingSection
            productQuery={productSearched}
            productList={products}
            onProductClick={handleProductClick}
          />
        } />
        <Route path="/cart" element={
          <CartPage
            productList={cartProduct}
            setProductList={setCartProduct}
          />
        } />
      </Routes>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAdd={handleAddToCart}
      />
    </>
  );
};

export default App;
