import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const addToCart = (name, price) => {
    setProducts((products) => [...products, { name, price }]);
  };
  return (
    <CartContext.Provider value={{ products, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
