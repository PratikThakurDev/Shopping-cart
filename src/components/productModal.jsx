
import styles from '../styles/productModal.module.css';

const ProductModal = ({ product, onClose , onAdd}) => {
    if (!product) return null ;
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        {/* Left: Image */}
        <div className={styles.left}>
          <img src={product.thumbnail} alt={product.title} />
          {product.discountPercentage && (
            <span className={styles.discount}>-{product.discountPercentage}%</span>
          )}
        </div>

        {/* Right: Info */}
        <div className={styles.right}>
          <h2>{product.title}</h2>
          <p className={styles.code}>
            Product code: #{product.id} &nbsp; | &nbsp; SKU: {product.sku || 'N/A'}
          </p>
          <div className={styles.rating}>⭐ {product.rating} ({product.reviews.length || 24})</div>

          <div className={styles.priceRow}>
            <p className={styles.gross}>${product.price}</p>
            <p className={styles.net}>
              ${Math.round(product.price * (1 - product.discountPercentage / 100))}
            </p>
          </div>

          <button className={styles.cartBtn} onClick={()=>onAdd(product)}>Add to cart</button>

          <div className={styles.infoRow}>
            <p>✅ In Stock</p>
            <p>🚚 {product.shippingInformation}</p>
            <p>🎁 Free delivery from $500</p>
            <p>🔁 {product.returnPolicy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
