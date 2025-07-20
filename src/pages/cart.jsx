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

  const handleDecrement = (product) => {
    if(!product) return ;
    setProductList(prev =>
      prev.map(p =>
        p.id === product.id ? { ...p, quantity: (p.quantity || 1) - 1 } : p
      )
    );
  }

  const handleRemove = (product) => {
    setProductList(prev =>
      prev.filter(p => 
        p.id !== product.id
      )
    )
  }

  const totalItems = productList.reduce((acc, p) => acc + (p.quantity || 1), 0);
  const subtotal = parseFloat((productList.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0)).toFixed(2));
  const deliveryCost = 25;
  const tax = parseFloat((subtotal * 0.05).toFixed(2));
  const discount = parseFloat((subtotal*0.1).toFixed(2)); // flat discount (can make dynamic later)
  const total = parseFloat((subtotal + deliveryCost + tax - discount).toFixed(2));


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
              <span className={styles.qtyBtn} onClick = {()=>handleDecrement(product)}>-</span>
              <button className={styles.remove} onClick = {()=>handleRemove(product)}>✕</button>
            </div>
            <div className={styles.price}>${product.quantity ? (product.price).toFixed(2) : product.price}</div>
          </div>
        ))}

        <a href="#" className={styles.removeAll} onClick={()=>setProductList([])}>Remove all from cart</a>
      </div>

      {productList.length!==0 && <div className={styles.summaryBox}>
        <div style={{ display: "flex" }}>
          <input type="text" placeholder="Promocode" />
          <button className={styles.applyBtn}>Apply</button>
        </div>

        <div className={styles.summaryInfo}>
          <p>{totalItems} items: <span>${subtotal}</span></p>
          <p>Delivery cost: <span>${deliveryCost}</span></p>
          <p>Tax: <span>${tax}</span></p>
          <p>Discount: <span className={styles.discount}>- ${discount}</span></p>
          <hr />
          <p className={styles.total}>Total: <span>${total}</span></p>
        </div>

        <button className={styles.checkoutBtn}>Checkout →</button>
      </div>}
    </div>
  </>
  );
};

export default CartPage;
