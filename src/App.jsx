// App.jsx
import { useEffect, useState } from 'react';
import { getAllProducts } from './api/productService';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import ShoppingSection from './pages/shoppage';
import ProductModal from './components/productModal' ;

const App = () => {
  const [products, setProducts] = useState([]);
  const [productSearched, setProductSearched] = useState('');
  const [page, setPage] = useState('home');
  const [selectedProduct , setSelectedProduct] = useState(null) ;

  useEffect(() => {
        async function fetchProducts() {
        const data = await getAllProducts();
        setProducts(data);
        }
        fetchProducts();
    }, []);

  const handleSearch = (query) => {
    setProductSearched(query);
    setPage('search');
  };

  const handleProductClick = (productCard) => {
    if(!productCard) return null ;
    setSelectedProduct(productCard) ;
  };


  return (
    <>
      <NavBar onSearch={handleSearch} />
      {page === 'home' ? (
        <HomePage products={products} onProductClick={handleProductClick}/>
      ) : (
        <ShoppingSection productQuery={productSearched} productList={products} onProductClick={handleProductClick}/>
      )}
      <ProductModal product={selectedProduct} onClose={()=>setSelectedProduct(null)}/>
    </>
  );
};

export default App;
