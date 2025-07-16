import appleWatch from '../assets/ali-haki-ygXQfVFwbkA-unsplash.jpg';
import phone from '../assets/phone.jpg';
import NavBar from '../components/navbar';
import styles from '../styles/homepage.module.css';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productService';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [trendingSecCategory,setTrendingSecCategory] = useState('smartphones') ;

  useEffect(() => {
    async function fetchProducts() {
      const products = await getAllProducts();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  const getProduct = ({ brand, titleIncludes, category, tag }) => {
    return products.filter((product) => {
      const matchBrand = brand ? product.brand?.toLowerCase() === brand.toLowerCase() : true;
      const matchTitle = titleIncludes
        ? product.title?.toLowerCase().includes(titleIncludes.toLowerCase())
        : true;
      const matchCategory = category
        ? product.category?.toLowerCase() === category.toLowerCase()
        : true;
      const matchTag = tag
        ? product.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
        : true;

      return matchBrand && matchTitle && matchCategory && matchTag;
    });
  };


  return (
    <>
      <NavBar />

      <main>
        {/* Top Flex Row: HomePod + Apple Watch */}
        <section className={styles.topRow}>
          {getProduct({ brand: 'Apple', tag: 'smart speakers' })
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.blue}`}>
                <div>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <button>Shop Now →</button>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}

          {getProduct({ brand: 'Apple' , titleIncludes : 'watch'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.purple}`}>
                <div>
                  <h1>Explore {product.title}</h1>
                  <p>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}
        </section>

        {/* Bottom Cards Grid */}
        <section className={styles.bottomGrid}>
          {getProduct({brand: 'Amazon' , titleIncludes : 'echo'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.orange}`}>
                <div>
                  <h2>{product.title}</h2>
                  <p>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}

          {getProduct ({brand : 'Apple' , titleIncludes : 'pods max'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.green}`}>
                <div>
                  <h2>{product.title}</h2>
                  <p>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}

          {getProduct({brand : 'Rolex' , titleIncludes : 'watch'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.dark}`}>
                <div>
                  <h2>{product.title}</h2>
                  <p>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}
        </section>

        {/* Trending Section */}
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
            {getProduct({category : 'smartphones'})
              .slice(0, 10)
              .map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.tag}>New</div>
                  <img src={product.thumbnail} alt={product.title} />
                  <p className={styles.stock}>In stock {product.stock} Items</p>
                  <h3 className={styles.productName}>{product.title}</h3>
                  <p className={styles.price}>${product.price}</p>
                  <div className={styles.rating}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>{i < Math.round(product.rating) ? '⭐' : '☆'}</span>
                    ))}
                    <span> ({product.rating})</span>
                  </div>
                  <button className={styles.orderBtn}>Order Now</button>
                </div>
              ))}
          </div>
        </section>

        {/* Promo + Collection Section */}
        <section className={styles.promoCollectionSection}>
          <div className={styles.promoBanners}>
            {[
              ...products.filter((p) => p.title.toLowerCase().includes('watch')).slice(0, 1).map((product) => (
                <div key={product.id} className={`${styles.promoCard} ${styles.blue}`}>
                  <div>
                    <h3>Discounts 50% <br /> On All Watches</h3>
                    <a href="#">Shop Now →</a>
                  </div>
                  <img src={product.thumbnail} alt="Watch Promo" />
                </div>
              )),
              ...products.filter((p) => p.title.toLowerCase().includes('pods')).slice(0, 1).map((product) => (
                <div key={product.id} className={`${styles.promoCard} ${styles.purple}`}>
                  <div>
                    <h3>Mega Discounts <br /><span>This Week</span></h3>
                    <a href="#">Shop Now →</a>
                  </div>
                  <img src={product.thumbnail} alt="AirPods Promo" />
                </div>
              ))
            ]}
          </div>

          <h3 className={styles.collectionTitle}>Collection List</h3>
          <div className={styles.collectionGrid}>
            {[
              'Speaker',
              'Smart Watch',
              'Camera',
              'Smart Phone',
              'Virtual Accessories',
              'Smart Buds',
            ].map((label, index) => (
              <div key={index} className={styles.collectionItem}>
                <div className={styles.circle}>
                  <img src={appleWatch} alt={label} />
                </div>
                <p>{label}</p>
                <span>20 Items</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Section */}
        <section className={styles.recommendedSection}>
          <h3 className={styles.sectionTitle}>Recommended for You</h3>
          <nav className={styles.tabs}>
            {['Accessories', 'Smart Watch', 'Smart Phone', 'Speaker'].map((cat, i) => (
              <span key={i} className={i === 0 ? styles.activeTab : ''}>{cat}</span>
            ))}
          </nav>

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
