import styles from '../styles/cart.module.css';


const DELIVERY_COST = 25;
const TAX_RATE = 0.05;
const DISCOUNT_RATE = 0.1;

const CartSummary = ({ productList }) => {
  const totalItems = productList.reduce((acc, p) => acc + (p.quantity || 1), 0);
  const subtotal = parseFloat(productList.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0).toFixed(2));
  const tax = parseFloat((subtotal * TAX_RATE).toFixed(2));
  const discount = parseFloat((subtotal * DISCOUNT_RATE).toFixed(2));
  const total = parseFloat((subtotal + DELIVERY_COST + tax - discount).toFixed(2));

  return (
    <div className={styles.summaryBox}>
      <div className={styles.summaryInfo}>
        <p>{totalItems} items: <span>${subtotal}</span></p>
        <p>Delivery cost: <span>${DELIVERY_COST}</span></p>
        <p>Tax: <span>${tax}</span></p>
        <p>Discount: <span className={styles.discount}>- ${discount}</span></p>
        <hr />
        <p className={styles.total}>Total: <span>${total}</span></p>
      </div>

      <button className={styles.checkoutBtn}>Checkout →</button>

      <div className={styles.deliveryNote}>
        📦 Delivered by <strong>Friday, May 20</strong>
      </div>
    </div>
  );
};

export default CartSummary;
