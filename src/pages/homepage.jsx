import styles from '../styles/homepage.module.css';
import appleWatch from '../assets/ali-haki-ygXQfVFwbkA-unsplash.jpg';
import phone from '../assets/phone.jpg' ;
const HomePage = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.companyName}>DigiTech</div>
        <div className={styles.searchBar}>
          <input className={styles.input} type="text" placeholder="Search..." />
          <span>🔍</span>
        </div>
        <div className={styles.icons}>
          <span>👤</span>
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </nav>

      <main>
        {/* Top Flex Row: HomePod + Apple Watch */}
        <section className={styles.topRow}>
          <div className={`${styles.card} ${styles.blue}`}>
            <div>
              <h1>Apple HomePod 2nd Gen Speaker</h1>
              <p>
                Apple ecosystem and provide high-quality audio playback while also serving as a hub for controlling smart home devices.
              </p>
              <button>Shop Now →</button>
            </div>
            <img src={appleWatch} alt="HomePod" />
          </div>

          <div className={`${styles.card} ${styles.purple}`}>
            <div>
              <h2>Explore Apple Watch</h2>
              <p>Shop Now →</p>
            </div>
            <img src={appleWatch} alt="Apple Watch" />
          </div>
        </section>

        {/* Bottom Cards Grid */}
        <section className={styles.bottomGrid}>
          <div className={`${styles.card} ${styles.orange}`}>
            <div>
              <h2>Samsung Gear Camera</h2>
              <p>Shop Now →</p>
            </div>
            <img src={appleWatch} alt="Samsung Camera" />
          </div>

          <div className={`${styles.card} ${styles.green}`}>
            <div>
              <h2>Beats Studio Buds</h2>
              <p>Shop Now →</p>
            </div>
            <img src={appleWatch} alt="Beats" />
          </div>

          <div className={`${styles.card} ${styles.dark}`}>
            <div>
              <h2>Hero Camera</h2>
              <p>Shop Now →</p>
            </div>
            <img src={appleWatch} alt="Hero" />
          </div>
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
              {Array(10).fill(0).map((_, index) => (
                <div key={index} className={styles.productCard}>
                  <div className={styles.tag}>New</div>
                  <img src={phone} alt="Product" />
                  <p className={styles.stock}>In stock 52 Items</p>
                  <h3 className={styles.productName}>Galaxy Note20 Ultra 5G</h3>
                  <p className={styles.price}>$2,780</p>
                  <div className={styles.rating}>⭐⭐⭐⭐⭐ <span>(5)</span></div>
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


      </main>
    </>
  );
};

export default HomePage;
