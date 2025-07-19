// App.jsx
import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import ShoppingSection from './pages/shoppage';
import { getAllProducts } from './api/productService';

const App = () => {
  const [products, setProducts] = useState([]);
  const [productSearched, setProductSearched] = useState('');
  const [page, setPage] = useState('home');

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

  return (
    <>
      <NavBar onSearch={handleSearch} />
      {page === 'home' ? (
        <HomePage products={products} />
      ) : (
        <ShoppingSection productQuery={productSearched} productList={products} />
      )}
    </>
  );
};

export default App;
