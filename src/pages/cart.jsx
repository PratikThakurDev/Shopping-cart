import styles from "../styles/cart.module.css";

const CartPage = ({productList , setProductList}) => {

  const handleIncrement = (product) => {
    if(!product) return ;
    setProductList(prev =>
      prev.map(p =>
        p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      )
    );
  }

  const handleDecrement = () => {
    
  }


  return (
    <>
    <div className={styles.cartPage}>
      <div className={styles.cartItemsSection}>
        <h2>Your cart</h2>
        <p>{productList.length} Products in Your cart</p>

        {productList && productList.map((product) => (
          <div className={styles.cartItem} key={product.id}>
            <img src={product.thumbnail} alt={product.title}/>
            <div className={styles.itemDetails}>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
            <div className={styles.controls}>
              Qty: {product.quantity || 1}
              <span className={styles.qtyBtn} onClick = {()=>handleIncrement(product)}>+</span>
              <span className={styles.qtyBtn}>-</span>
              <button className={styles.remove}>✕</button>
            </div>
            <div className={styles.price}>${product.quantity ? (product.price*product.quantity).toFixed(2) : product.price}</div>
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
