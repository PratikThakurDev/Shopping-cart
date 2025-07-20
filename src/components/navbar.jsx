import { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productService';
import ShoppingSection from '../pages/shoppage';
import styles from '../styles/navBar.module.css';
import HomePage from '../pages/homepage';


const NavBar = ({ onSearch , setPage}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.companyName} onClick = {()=> setPage('home')}>DigiTech</div>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      <div className={styles.icons}>
        <span>👤</span>
        <span onClick={()=>setPage('cart')}>🛒</span>
      </div>
    </nav>
  );
};

export default NavBar ;