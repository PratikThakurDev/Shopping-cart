import styles from '../styles/homepage.module.css';

const HomePage = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.companyName}>DigiTech</div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
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
            <img src="https://via.placeholder.com/150" alt="HomePod" />
          </div>

          <div className={`${styles.card} ${styles.purple}`}>
            <div>
              <h2>Explore Apple Watch</h2>
              <p>Shop Now →</p>
            </div>
            <img src="https://via.placeholder.com/100" alt="Apple Watch" />
          </div>
        </section>

        {/* Bottom Cards Grid */}
        <section className={styles.bottomGrid}>
          <div className={`${styles.card} ${styles.orange}`}>
            <div>
              <h2>Samsung Gear Camera</h2>
              <p>Shop Now →</p>
            </div>
            <img src="https://via.placeholder.com/100" alt="Samsung Camera" />
          </div>

          <div className={`${styles.card} ${styles.green}`}>
            <div>
              <h2>Beats Studio Buds</h2>
              <p>Shop Now →</p>
            </div>
            <img src="https://via.placeholder.com/100" alt="Beats" />
          </div>

          <div className={`${styles.card} ${styles.dark}`}>
            <div>
              <h2>Hero Camera</h2>
              <p>Shop Now →</p>
            </div>
            <img src="https://via.placeholder.com/100" alt="Hero" />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
