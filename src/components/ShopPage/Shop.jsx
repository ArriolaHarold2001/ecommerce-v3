import ShopHero from "../UniversalComponents/Hero/ShopHero";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import ProductComponent from "./ProductComponent";
import "./shop.css";
// import "../../App.css";

const Shop = () => {
  return (
    <>
      <Nav />
      <ShopHero />

      <main className="shop-section_grid">
        <aside className="shop-nav dropdown">
          <button className="dropbtn">
            Product Type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dropdown shop-svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            id="myDropDown"
            className="dropdown-content"
            data-visible="false"
          >
            <a href="#">Cars</a>
            <a href="#">Black/White</a>
            <a href="#">Bright</a>
            <a href="#">Signature Shots</a>
          </div>
        </aside>
        <ProductComponent />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
