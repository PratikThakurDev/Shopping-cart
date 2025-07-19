import phone from '../assets/phone.jpg';
import NavBar from '../components/navbar';
import BrandRow from '../components/brandrow';
import styles from '../styles/shoppage.module.css';
const products = [
  {
    title: "MOKOBARA The Aisle Backpack",
    desc: "Fits 15.6 Inch Laptop, 19L, Water-Resistant, Lightweight & Durable",
    price: "₹6,999",
    delivery: "Sun, 20 Jul",
    img: "https://via.placeholder.com/120x160?text=Bag+1",
    tag: "Sponsored",
  },
  {
    title: "Gear NG Fortuner Anti Theft Backpack",
    desc: "Business, Water Resistant, 15.6 inch Laptop Bag",
    price: "₹1,399",
    delivery: "Tue, 22 Jul",
    img: "https://via.placeholder.com/120x160?text=Bag+2",
    tag: "Sponsored",
  },
  {
    title: "Safari Omega Spacious Backpack",
    desc: "Large laptop bag, Raincover, College + Travel",
    price: "₹699",
    delivery: "Wed, 23 Jul",
    img: "https://via.placeholder.com/120x160?text=Bag+3",
    tag: "Amazon's Choice",
  },
];

const ShoppingSection = () => {
  return (
    <>
    <NavBar/>
    <section className={styles.resultsSection}>
      <h2>Results</h2>
      <p className={styles.subText}>
        Check each product page for other buying options. Price and other details may vary.
      </p>

      {products.map((p, i) => (
        <div key={i} className={styles.card}>
          <img src={phone} alt={p.title} className={styles.productImg} />
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
