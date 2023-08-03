import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const Checkout = () => {
  const { products, addToCart } = useContext(CartContext);
  return (
    <div className="checkout">
      <Header />
      <p>Checkout</p>
      {products.length <= 0 && "Cart empty !"}
      {products.length > 0 && (
        <div className="cartItems">
          {products.map((p) => (
            <div className="item">
              <p>
                {p.name} - {p.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
