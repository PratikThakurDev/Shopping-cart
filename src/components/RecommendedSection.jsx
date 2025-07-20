import { useState } from 'react';
import styles from '../styles/homepage.module.css';
import { getProduct } from '../utils/getProduct';

const RecommendedSection = ({ products, onProductClick }) => {
  const [category, setCategory] = useState('smartphones');

  const tabs = [
    { label: 'Mobile', category: 'smartphones' },
    { label: 'Watches', category: 'mens-watches' },
    { label: 'Shoes', category: 'mens-shoes' },
    { label: 'Laptops', category: 'laptops' },
  ];

  const recommended = getProduct(products, { category }).slice(0, 6);

  return (
    <section className={styles.recommendedSection}>
      <h3 className={styles.sectionTitle}>Recommended for You</h3>
      <nav className={styles.tabs}>
        {tabs.map(({ label, category: cat }) => (
          <span
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? styles.activeTab : ''}
          >
            {label}
          </span>
        ))}
      </nav>

      <div className={styles.productGrid}>
        {recommended.map((product, i) => (
          <div key={i} className={styles.productCard} onClick={() => onProductClick(product)}>
            <div className={styles.inStock}>• In stock {product.stock} Items</div>
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p className={styles.price}>${product.price}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
