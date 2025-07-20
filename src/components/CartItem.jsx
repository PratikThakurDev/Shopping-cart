import styles from '../styles/cart.module.css';

const CartItem = ({ product, onIncrement, onDecrement, onRemove }) => {
  const quantity = product.quantity || 1;
  const total = (product.price * quantity).toFixed(2);

  return (
    <div className={styles.cartItem}>
      <img src={product.thumbnail} alt={product.title} />
      <div className={styles.itemDetails}>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
      <div className={styles.controls}>
        Qty: {quantity}
        <span className={styles.qtyBtn} onClick={() => onIncrement(product)}>+</span>
        <span className={styles.qtyBtn} onClick={() => onDecrement(product)}>-</span>
        <button className={styles.remove} onClick={() => onRemove(product)}>✕</button>
      </div>
      <div className={styles.price}>${total}</div>
    </div>
  );
};

export default CartItem;
