import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const Product = ({ name, price }) => {
  const { products, addToCart } = useContext(CartContext);
  return (
    <div className="product">
      <div className="image">
        <i className="fa-solid fa-shirt"></i>
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <div className="buy" onClick={() => addToCart(name, price)}>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default Product;
