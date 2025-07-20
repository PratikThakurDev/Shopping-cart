import styles from "../styles/shoppage.module.css";

const SearchProductCard = ({ product, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(product)}>
      <img src={product.thumbnail} alt={product.title} className={styles.productImg} />
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>${product.price}</p>
        <button className={styles.cartBtn}>Add to cart</button>
      </div>
    </div>
  );
};

export default SearchProductCard;
