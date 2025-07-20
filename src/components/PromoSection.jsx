// components/PromoSection.jsx
import styles from '../styles/homepage.module.css';
import { getProduct } from '../utils/getProduct';

const PromoSection = ({ products, onSearch }) => {
  const collections = [
    { label: 'Men Clothing', query: 'shirt', category: 'mens-shirts' },
    { label: 'Smart Watch', query: 'watch', category: 'mens-watches' },
    { label: 'Men Shoes', query: 'shoe', category: 'mens-shoes' },
    { label: 'Smart Phone', query: 'phone', category: 'smartphones' },
    { label: 'Virtual Accessories', query: 'mobile', category: 'mobile-accessories' },
    { label: 'Laptops', query: 'laptop', category: 'laptops' },
  ];

  return (
    <section className={styles.promoCollectionSection}>
      <div className={styles.promoBanners}>
        {['watch', 'pods'].map((term, i) => {
          const product = products.find(p => p.title.toLowerCase().includes(term));
          return product && (
            <div
              key={i}
              className={`${styles.promoCard} ${i === 0 ? styles.blue : styles.purple}`}
              onClick={() => onSearch(term)}
            >
              <div>
                <h3>{i === 0 ? 'Discounts 50% On All Watches' : 'Mega Discounts This Week'}</h3>
                <a href="#">Shop Now →</a>
              </div>
              <img src={product.thumbnail} alt="Promo" />
            </div>
          );
        })}
      </div>

      <h3 className={styles.collectionTitle}>Collection List</h3>
      <div className={styles.collectionGrid}>
        {collections.map(({ label, query, category }, index) => {
          const product = getProduct(products, { category })[0];
          return (
            <div key={index} className={styles.collectionItem} onClick={() => onSearch(query)}>
              <div className={styles.circle}>
                <img src={product?.thumbnail} alt={label} />
              </div>
              <p>{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PromoSection;
