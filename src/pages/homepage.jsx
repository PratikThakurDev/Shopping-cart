import appleWatch from '../assets/ali-haki-ygXQfVFwbkA-unsplash.jpg';
import phone from '../assets/phone.jpg';
import NavBar from '../components/navbar';
import styles from '../styles/homepage.module.css';
import {useEffect , useState} from 'react' ;
import { getAllProducts } from '../api/productService';

const HomePage = () => {

const [products,setProducts] = useState([]) ;

useEffect(() => {
  async function fetchProducts() {
    const products = await getAllProducts();
    console.log(products) ;
    setProducts(products) ;
  }
  fetchProducts();
 ;
  
}, []);
  return (
    <>

      <NavBar/>

      <main>
        {/* Top Flex Row: HomePod + Apple Watch */}
        <section className={styles.topRow}>
          {products ? (
            products
              .filter((product) => product.brand === 'Apple' && product.tags.includes('smart speakers'))
              .map((product) => (
                <div key={product.id} className={`${styles.card} ${styles.blue}`}>
                  <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <button>Shop Now →</button>
                  </div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              ))
          ) : (
            <p>Loading...</p>
          )}
          {products ? (
            products
              .filter((product) => product.brand === 'Apple' &&
        product.title.toLowerCase().includes('watch'))
              .map((product) => (
                <div key={product.id} className={`${styles.card} ${styles.purple}`}>
                  <div>
                    <h1>Explore {product.title}</h1>
                    <p>Shop Now →</p>
                  </div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              ))
          ) : (
            <p>Loading...</p>
          )}
        </section>

        {/* Bottom Cards Grid */}
        <section className={styles.bottomGrid}>
          {products ? (
            products
              .filter(
                (product) =>
                  product.brand === 'Amazon' &&
                  product.title.toLowerCase().includes('echo')
              )
              .map((product) => (
                <div key={product.id} className={`${styles.card} ${styles.orange}`}>
                  <div>
                    <h2>{product.title}</h2>
                    <p>Shop Now →</p>
                  </div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              ))
          ) : (
            <p>Loading...</p>
          )}


          {products ? (
            products
              .filter(
                (product) =>
                  product.brand === 'Apple' &&
                  product.title.toLowerCase().includes('pods max')
              )
              .map((product) => (
                <div key={product.id} className={`${styles.card} ${styles.green}`}>
                  <div>
                    <h2>{product.title}</h2>
                    <p>Shop Now →</p>
                  </div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              ))
          ) : (
            <p>Loading...</p>
          )}

          {products ? (
            products
              .filter(
                (product) =>
                  product.brand === 'Rolex' &&
                  product.title.toLowerCase().includes('watch')
              )
              .map((product) => (
                <div key={product.id} className={`${styles.card} ${styles.dark}`}>
                  <div>
                    <h2>{product.title}</h2>
                    <p>Shop Now →</p>
                  </div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              ))
          ) : (
            <p>Loading...</p>
          )}

        </section>
        <section className={styles.trendingSection}>
            <h2>Trending Products</h2>
            <nav className={styles.trendingTabs}>
              <span className={styles.active}>Mobile</span>
              <span>Watch</span>
              <span>Camera</span>
              <span>Accessories</span>
              <span>Speaker</span>
            </nav>

            <div className={styles.productsGrid}>
              {products
                .filter((product) => product.category === 'smartphones').slice(0,10)
                .map((product, index) => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.tag}>New</div>
                    <img src={product.thumbnail} alt={product.title} />
                    <p className={styles.stock}>In stock {product.stock} Items</p>
                    <h3 className={styles.productName}>{product.title}</h3>
                    <p className={styles.price}>${product.price}</p>
                    <div className={styles.rating}>⭐⭐⭐⭐⭐ <span>({product.rating})</span></div>
                    <button className={styles.orderBtn}>Order Now</button>
                  </div>
              ))}
              </div> 
        </section>
        <section className={styles.promoCollectionSection}>
            {/* Promo Banners */}
            <div className={styles.promoBanners}>
              <div className={`${styles.promoCard} ${styles.blue}`}>
                <div>
                  <h3>Discounts 50% <br /> On All Watches</h3>
                  <a href="#">Shop Now →</a>
                </div>
                <img src="https://via.placeholder.com/150" alt="Watch Promo" />
              </div>

              <div className={`${styles.promoCard} ${styles.purple}`}>
                <div>
                  <h3>Mega Discounts <br /><span>This Week</span></h3>
                  <a href="#">Shop Now →</a>
                </div>
                <img src="https://via.placeholder.com/150" alt="AirPods Promo" />
              </div>
            </div>

            {/* Collection List */}
            <h3 className={styles.collectionTitle}>Collection List</h3>
            <div className={styles.collectionGrid}>
              {[
                { label: 'Speaker' },
                { label: 'Smart Watch' },
                { label: 'Camera' },
                { label: 'Smart Phone' },
                { label: 'Virtual Accessories' },
                { label: 'Smart Buds' }
              ].map((item, index) => (
                <div key={index} className={styles.collectionItem}>
                  <div className={styles.circle}>
                    <img src={appleWatch} alt={item.label} />
                  </div>
                  <p>{item.label}</p>
                  <span>20 Items</span>
                </div>
              ))}
            </div>
        </section>
        <section className={styles.recommendedSection}>
          <h3 className={styles.sectionTitle}>Recommended for You</h3>

          {/* Category Tabs */}
          <nav className={styles.tabs}>
            {['Accessories', 'Smart Watch', 'Smart Phone', 'Speaker'].map((cat, i) => (
              <span key={i} className={i === 0 ? styles.activeTab : ''}>{cat}</span>
            ))}
          </nav>

          {/* Product Grid */}
          <div className={styles.productGrid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.productCard}>
                <div className={styles.inStock}>• In stock 52 Items</div>
                <img src={phone} alt="Product" />
                <h4>Product Name {i + 1}</h4>
                <p className={styles.price}>${(100 + i * 100)}</p>
                <button>Order Now</button>
              </div>
            ))}
          </div>

          {/* Brand Logos */}
          <div className={styles.brandRow}>
            {['Renesas', 'Sharp', 'Huawei', 'Nokia', 'Samsung', 'Canon'].map((brand, i) => (
              <img key={i} src={`https://via.placeholder.com/80x30?text=${brand}`} alt={brand} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
