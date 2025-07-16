import styles from "../styles/cart.module.css";
import NavBar from "../components/navbar";

const CartPage = () => {
  return (
    <>
    <NavBar/>
    <div className={styles.cartPage}>
      <div className={styles.cartItemsSection}>
        <h2>Your cart</h2>
        <p>5 Products in Your cart</p>

        {[...Array(5)].map((_, i) => (
          <div className={styles.cartItem} key={i}>
            <img src="/sample.png" alt="Product" />
            <div className={styles.itemDetails}>
              <h4>Great product name goes here</h4>
              <p>Color: Silver</p>
              <p>Size: Large</p>
              <p>Price: 23 USD / per item</p>
            </div>
            <div className={styles.controls}>
              <select>
                <option>Qty: 1</option>
                <option>Qty: 2</option>
              </select>
              <span>❤️</span>
              <button>✕</button>
            </div>
            <div className={styles.price}>46.00 USD</div>
          </div>
        ))}

        <a href="#" className={styles.removeAll}>Remove all from cart</a>
      </div>

      <div className={styles.summaryBox}>
        <div style={{ display: "flex" }}>
          <input type="text" placeholder="Promocode" />
          <button>Apply</button>
        </div>

        <div className={styles.summaryInfo}>
          <p>5 items: <span>$1703.00</span></p>
          <p>Delivery cost: <span>$25</span></p>
          <p>Tax: <span>$14</span></p>
          <p>Discount: <span className={styles.discount}>- $60.00</span></p>
          <hr />
          <p className={styles.total}>Total: <span>$1,655.99</span></p>
        </div>

        <button className={styles.checkoutBtn}>Checkout →</button>

        <div className={styles.deliveryNote}>
          📦 Delivered by <strong>Friday, May 20</strong>
        </div>
      </div>
    </div>
  </>
  );
};

export default CartPage;
