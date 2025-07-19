import styles from '../styles/productCard.module.css' ;

const ProductCard = ({ product, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(product)}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
