import styles from '../styles/homepage.module.css';

const ProductCard = ({ product, onClick }) => (
  <div className={styles.productCard} onClick={() => onClick(product)}>
    <div className={styles.tag}>New</div>
    <img src={product.thumbnail} alt={product.title} />
    <p className={styles.stock}>In stock {product.stock} Items</p>
    <h3 className={styles.productName}>{product.title}</h3>
    <p className={styles.price}>${product.price}</p>
    <div className={styles.rating}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < Math.floor(product.rating) ? '⭐' : '☆'}</span>
      ))}
      <span> ({Math.floor(product.rating)})</span>
    </div>
    <button className={styles.orderBtn}>Order Now</button>
  </div>
);

export default ProductCard;
