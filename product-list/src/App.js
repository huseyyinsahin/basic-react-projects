import "./App.scss";
import Header from "./components/Header/Header";
import "./scss/_reset.scss";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCard />
    </div>
  );
}

export default App;
