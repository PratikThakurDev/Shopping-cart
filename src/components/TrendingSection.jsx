import { useState } from 'react';
import styles from '../styles/homepage.module.css';
import ProductCard from './ProductCard';
import { getProduct } from '../utils/getProduct';

const TrendingSection = ({ products, onProductClick }) => {
  const [category, setCategory] = useState('smartphones');

  const categories = [
    { label: 'Mobile', category: 'smartphones' },
    { label: 'Watches', category: 'mens-watches' },
    { label: 'Shoes', category: 'mens-shoes' },
    { label: 'Laptops', category: 'laptops' },
    { label: 'Sunglasses', category: 'sunglasses' }
  ];

  const trendingProducts = getProduct(products, { category }).slice(0, 10);

  return (
    <section className={styles.trendingSection}>
      <h2>Trending Products</h2>
      <nav className={styles.trendingTabs}>
        {categories.map(tab => (
          <span
            key={tab.category}
            onClick={() => setCategory(tab.category)}
            className={category === tab.category ? styles.active : ''}
          >
            {tab.label}
          </span>
        ))}
      </nav>
      <div className={styles.productsGrid}>
        {trendingProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={onProductClick} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
