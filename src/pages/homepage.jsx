import styles from '../styles/homepage.module.css';
import PromoSection from '../components/PromoSection';
import TrendingSection from '../components/TrendingSection';
import RecommendedSection from '../components/RecommendedSection';
import CollectionGrid from '../components/CollectionGrid';
import TopBannerRow from '../components/TopBannerRow';
import BrandRow from '../components/brandrow';

const HomePage = ({ products, onProductClick, onSearch }) => {
  return (
    <main>
      <TopBannerRow products={products} onProductClick={onProductClick} />
      <PromoSection products={products} onSearch={onSearch} />
      <TrendingSection products={products} onProductClick={onProductClick} />
      <CollectionGrid products={products} onSearch={onSearch} />
      <RecommendedSection products={products} onProductClick={onProductClick} />
      <BrandRow />
    </main>
  );
};

export default HomePage;
