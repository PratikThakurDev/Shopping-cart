// components/TopBannerRow.jsx
import styles from '../styles/homepage.module.css';
import { getProduct } from '../utils/getProduct';

const TopBannerRow = ({ products, onProductClick }) => {
  const speaker = getProduct(products, { brand: 'Apple', tag: 'smart speakers' });
  const watch = getProduct(products, { brand: 'Apple', titleIncludes: 'watch' });

  return (
    <section className={styles.topRow}>
      {[speaker, watch].flat().map((product, i) => (
        <div
          key={product.id}
          className={`${styles.card} ${i === 0 ? styles.blue : styles.purple}`}
          onClick={() => onProductClick(product)}
        >
          <div>
            <h1>{i === 0 ? product.title : `Explore ${product.title}`}</h1>
            <p>{product.description}</p>
            <button className={styles.shop}>Shop Now →</button>
          </div>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </section>
  );
};

export default TopBannerRow;
