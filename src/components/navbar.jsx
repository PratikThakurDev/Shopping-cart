import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/navBar.module.css';

const NavBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
    navigate('/search');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.companyName} onClick={() => navigate('/')}>DigiTech</div>
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
        <span onClick={() => navigate('/cart')}>🛒</span>
      </div>
    </nav>
  );
};

export default NavBar;
