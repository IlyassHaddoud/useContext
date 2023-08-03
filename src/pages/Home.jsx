import { useContext } from "react";
import Header from "../components/Header";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="productsList">
        <Product name="shirt" price="20$" />
        <Product name="pant" price="12$" />
        <Product name="boot" price="18$" />
        <Product name="gloves" price="10$" />
        <Product name="socks" price="5$" />
        <Product name="panite" price="13$" />
      </div>
    </div>
  );
};

export default Home;
