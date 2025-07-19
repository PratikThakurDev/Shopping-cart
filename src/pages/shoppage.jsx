import phone from '../assets/phone.jpg';
import NavBar from '../components/navbar';
import BrandRow from '../components/brandrow';
import styles from '../styles/shoppage.module.css';
import { getProduct } from '../utils/getProduct';

const ShoppingSection = ({productQuery , productList ,onProductClick}) => {
  return (
    <>
    <section className={styles.resultsSection}>
      <h2>Results</h2>
      <p className={styles.subText}>
        Check each product page for other buying options. Price and other details may vary.
      </p>

      {getProduct(productList,{titleIncludes : productQuery}).map((p, i) => (
        <div key={i} className={styles.card} onClick = {()=>onProductClick(p)}>
          <img src={p.thumbnail} alt={p.title} className={styles.productImg} />
          <div className={styles.productInfo}>
            <h3>{p.title}</h3>
            <p className={styles.description}>{p.desc}</p>
            <p className={styles.price}>{p.price}</p>
            <button className={styles.cartBtn}>Add to cart</button>
          </div>
        </div>
      ))}
    </section>
    <BrandRow/>
      </>
  );
};

export default ShoppingSection;
