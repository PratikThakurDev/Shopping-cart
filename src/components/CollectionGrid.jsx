import styles from "../styles/homepage.module.css";
import { getProduct } from "../utils/getProduct";

const CollectionGrid = ({ products, onSearch }) => {
  const collectionItems = [
    { label: 'Men Clothing', query: 'shirt', product: getProduct(products, { category: 'mens-shirts' })[0] },
    { label: 'Smart Watch', query: 'watch', product: getProduct(products, { category: 'mens-watches' })[1] },
    { label: 'Men Shoes', query: 'shoe', product: getProduct(products, { category: 'mens-shoes' })[0] },
    { label: 'Smart Phone', query: 'phone', product: getProduct(products, { category: 'smartphones' })[4] },
    { label: 'Virtual Accessories', query: 'mobile', product: getProduct(products, { category: 'mobile-accessories' })[2] },
    { label: 'Laptops', query: 'laptop', product: getProduct(products, { category: 'laptops' })[4] },
  ];

  return (
    <div>
      <h3 className={styles.collectionTitle}>Collection List</h3>
      <div className={styles.collectionGrid}>
        {collectionItems.map(({ label, product, query }, index) => (
          <div key={index} className={styles.collectionItem} onClick={() => onSearch(query)}>
            <div className={styles.circle}>
              <img src={product?.thumbnail} alt={label} />
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
