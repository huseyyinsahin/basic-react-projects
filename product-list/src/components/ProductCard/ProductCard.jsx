import { products } from "../../helper/data";
import "./ProductCard.scss";

function ProductCard() {
  return (
    <div className="productCard">
      {products.map(({ id, title, price, image }) => {
        return (
          <div className="product" id={id}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
