import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import { categories, products } from "../helper/data";

function HomePage() {
  return (
    <div>
      <Header categories={categories} />
      <ProductCard products={products} />
    </div>
  );
}

export default HomePage;
