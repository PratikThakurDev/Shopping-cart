
import { useState } from 'react';
import BrandRow from '../components/brandrow';
import styles from '../styles/homepage.module.css';
import { getProduct } from '../utils/getProduct';

const HomePage = ({products, onProductClick}) => {

  const [trendingSecCategory,setTrendingSecCategory] = useState('smartphones') ;
  const [recommendedSection,setRecommendedSection] = useState('smartphones') ;

  return (
    <>
      <main>
        <section className={styles.topRow}>
          {getProduct(products ,{ brand: 'Apple', tag: 'smart speakers'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.blue}`} onClick={()=> onProductClick(product)}>
                <div>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <button onClick = {() => (onProductClick(product))} className = {styles.shop}>Shop Now →</button>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}

          {getProduct(products ,{ brand: 'Apple' , titleIncludes : 'watch'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.purple}`} onClick={()=> onProductClick(product)}>
                <div>
                  <h1>Explore {product.title}</h1>
                  <p className = {styles.shop} onClick={()=> onProductClick(product)}>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}
        </section>

        {/* Bottom Cards Grid */}
        <section className={styles.bottomGrid}>
          {getProduct(products ,{brand: 'Amazon' , titleIncludes : 'echo'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.orange}`} onClick={()=> onProductClick(product)}>
                <div>
                  <h2>{product.title}</h2>
                    <p onClick={()=> onProductClick(product)} className = {styles.shop}>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}

          {getProduct (products ,{brand : 'Apple' , titleIncludes : 'pods max'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.green}`} onClick={()=> onProductClick(product)}>
                <div>
                  <h2>{product.title}</h2>
                  <p className = {styles.shop} onClick={()=> onProductClick(product)}>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}

          {getProduct(products ,{brand : 'Rolex' , titleIncludes : 'watch'})
            .map((product) => (
              <div key={product.id} className={`${styles.card} ${styles.dark}`} onClick={()=> onProductClick(product)}>
                <div>
                  <h2>{product.title}</h2>
                  <p className = {styles.shop} onClick={()=> onProductClick(product)}>Shop Now →</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}
        </section>

        {/* Trending Section */}
        <section className={styles.trendingSection}>
          <h2>Trending Products</h2>
          <nav className={styles.trendingTabs}>
            {[
              { label: 'Mobile', category: 'smartphones' },
              { label: 'Watches', category: 'mens-watches' },
              { label: 'Shoes', category: 'mens-shoes' },
              { label: 'Laptops', category: 'laptops' },
              { label: 'Sunglasses', category: 'sunglasses' }
            ].map(({ label, category }) => (
              <span
                key={category}
                onClick={() => setTrendingSecCategory(category)}
                className={trendingSecCategory === category ? styles.active : ''}
              >
                {label}
              </span>
            ))}
          </nav>

          <div className={styles.productsGrid}>
            {getProduct(products ,{category : trendingSecCategory})
              .slice(0, 10)
              .map((product) => (
                <div key={product.id} className={styles.productCard} onClick={()=> onProductClick(product)}>
                  <div className={styles.tag}>New</div>
                  <img src={product.thumbnail} alt={product.title} />
                  <p className={styles.stock}>In stock {product.stock} Items</p>
                  <h3 className={styles.productName}>{product.title}</h3>
                  <p className={styles.price}>${product.price}</p>
                  <div className={styles.rating}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>{i < Math.floor(product.rating) ? '⭐' : '☆'}</span>
                    ))}
                    <span> ({Math.floor(product.rating)})</span>
                  </div>
                  <button className={styles.orderBtn} onClick={()=> onProductClick(product)}>Order Now</button>
                </div>
              ))}
          </div>
        </section>

        {/* Promo + Collection Section */}
        <section className={styles.promoCollectionSection}>
          <div className={styles.promoBanners}>
            {[
              products.filter((p) => p.title.toLowerCase().includes('watch')).slice(0, 1).map((product) => (
                <div key={product.id} className={`${styles.promoCard} ${styles.blue}`}>
                  <div>
                    <h3>Discounts 50% <br /> On All Watches</h3>
                    <a href="#">Shop Now →</a>
                  </div>
                  <img src={product.thumbnail} alt="Watch Promo" />
                </div>
              )),
              products.filter((p) => p.title.toLowerCase().includes('pods')).slice(0, 1).map((product) => (
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
              { label: 'Men Clothing', image: getProduct(products ,{category : 'mens-shirts' })[0] },
              { label: 'Smart Watch', image: getProduct(products ,{category : 'mens-watches' })[1] },
              { label: 'Men Shoes', image: getProduct(products ,{category : 'mens-shoes' })[0] },
              { label: 'Smart Phone', image: getProduct(products ,{category : 'smartphones' })[4] },
              { label: 'Virtual Accessories', image: getProduct(products ,{category : 'mobile-accessories' })[2] },
              { label: 'Laptops', image: getProduct(products ,{category : 'laptops' })[4] },
            ].map(({label,image}, index) => (
              <div key={index} className={styles.collectionItem}>
                <div className={styles.circle}>
                  <img src={image?.thumbnail} alt={label} />
                </div>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Section */}
        <section className={styles.recommendedSection}>
          <h3 className={styles.sectionTitle}>Recommended for You</h3>
          <nav className={styles.tabs}>
            {[
              { label: 'Mobile', category: 'smartphones' },
              { label: 'Watches', category: 'mens-watches' },
              { label: 'Shoes', category: 'mens-shoes' },
              { label: 'Laptops', category: 'laptops' },
            ].map(({label, category}) => (
              <span key={category} 
              onClick={()=>(setRecommendedSection(category))}
              className={recommendedSection === category ? styles.activeTab : ''}>{label}</span>
            ))}
          </nav>

          <div className={styles.productGrid}>
            {getProduct(products ,{category : recommendedSection}).slice(0,6)
            .map((product , i) => (
              <div key={i} className={styles.productCard} onClick={()=> onProductClick(product)}>
                <div className={styles.inStock}>• In stock {product.stock} Items</div>
                <img src={product.thumbnail} alt="Product" />
                <h4>{product.title}</h4>
                <p className={styles.price}>${product.price}</p>
                <button onClick={()=> onProductClick(product)}>Order Now</button>
              </div>
            ))}
          </div>
          <BrandRow/>
        </section>
      </main>
    </>
  );
};

export default HomePage;
