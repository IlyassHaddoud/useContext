import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const Header = () => {
  const { products, addToCart } = useContext(CartContext);

  return (
    <div className="header ">
      <div className="logo">
        <Link to="/">IShop</Link>
      </div>
      <div className="cart">
        <Link to="/checkout">
          <i className="fa-solid fa-cart-shopping"> {products.length}</i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
