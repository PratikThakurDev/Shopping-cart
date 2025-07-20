// App.jsx
import { useEffect, useState } from 'react';
import { getAllProducts } from './api/productService';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import ShoppingSection from './pages/shoppage';
import Cart from './pages/cart' ;
import ProductModal from './components/productModal' ;

const App = () => {
  const [products, setProducts] = useState([]);
  const [productSearched, setProductSearched] = useState('');
  const [page, setPage] = useState('home');
  const [selectedProduct , setSelectedProduct] = useState(null) ;
  const [cartProduct , setCartProduct] = useState([]) ;

  useEffect(() => {
        async function fetchProducts() {
        const data = await getAllProducts();
        setProducts(data);
        console.log(data)
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

  const handleAddtoCart = (product) => {
    if (!cartProduct.some(p=>p.id===product.id)) {
      setCartProduct([...cartProduct, product]) ; 
    }   
  }
  
  return (
    <>
      <NavBar onSearch={handleSearch} setPage = {setPage} />
      {page === 'home' ? (
        <HomePage products={products} onProductClick={handleProductClick} onSearch={handleSearch}/>
      ) : page==='search' ? (
        <ShoppingSection productQuery={productSearched} productList={products} onProductClick={handleProductClick}/>
      ) : <Cart/> }
      <ProductModal product={selectedProduct} onClose={()=>setSelectedProduct(null)} onAdd = {(product)=>handleAddtoCart(product)}/>
    </>
  );
};

export default App;
