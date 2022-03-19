import ShopHero from "../UniversalComponents/Hero/ShopHero";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import ProductComponent from "./ProductComponent";
import "./shop.css";
import Filter from "./Filter";
// import "../../App.css";

const Shop = () => {
  return (
    <>
      <Nav />
      <ShopHero />

      <main className="shop-section_grid">
        <Filter />
        {/* <ProductComponent /> */}
      </main>
      <Footer />
    </>
  );
};

export default Shop;
