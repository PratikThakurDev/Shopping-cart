import styles from "../styles/cart.module.css";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const CartPage = ({ productList, setProductList }) => {
  const handleIncrement = (product) => {
    setProductList(prev =>
      prev.map(p => p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p)
    );
  };

  const handleDecrement = (product) => {
    setProductList(prev =>
      prev.map(p =>
        p.id === product.id ? { ...p, quantity: Math.max(1, (p.quantity || 1) - 1) } : p
      )
    );
  };

  const handleRemove = (product) => {
    setProductList(prev => prev.filter(p => p.id !== product.id));
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItemsSection}>
        <h2>Your cart</h2>
        {productList.length === 0 ? (
          <p className={styles.empty}>🛒 Your cart is empty.</p>
        ) : (
          <>
            <p>{productList.length} Products in Your cart</p>
            {productList.map(product => (
              <CartItem
                key={product.id}
                product={product}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onRemove={handleRemove}
              />
            ))}
            <a href="#" className={styles.removeAll} onClick={() => setProductList([])}>Remove all from cart</a>
          </>
        )}
      </div>

      {productList.length > 0 && <CartSummary productList={productList} />}
    </div>
  );
};

export default CartPage;
