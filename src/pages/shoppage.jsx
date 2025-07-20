import BrandRow from '../components/brandrow';
import styles from '../styles/shoppage.module.css';
import { getProduct } from '../utils/getProduct';
import SearchProductCard from '../components/SearchProductCard';

const ShoppingSection = ({ productQuery, productList, onProductClick }) => {
  const filteredProducts = getProduct(productList, { titleIncludes: productQuery });

  return (
    <>
      <section className={styles.resultsSection}>
        <h2>Results</h2>
        <p className={styles.subText}>
          Check each product page for other buying options. Price and other details may vary.
        </p>

        {filteredProducts.map((p, i) => (
          <SearchProductCard key={i} product={p} onClick={onProductClick} />
        ))}
      </section>
      <BrandRow />
    </>
  );
};

export default ShoppingSection;
