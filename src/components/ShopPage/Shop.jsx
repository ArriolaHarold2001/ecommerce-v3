import React, { useState } from "react";
import ShopHero from "../UniversalComponents/Hero/ShopHero";
import Data from "../../data/products.json";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState(Data.products);
  return (
    <>
      <ShopHero />

      <main class="shop-section_grid">
        <aside class="shop-nav dropdown">
          <button class="dropbtn">
            Product Type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="dropdown shop-svg"
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
          <div id="myDropDown" class="dropdown-content" data-visible="false">
            <a href="#">Cars</a>
            <a href="#">Black/White</a>
            <a href="#">Bright</a>
            <a href="#">Signature Shots</a>
          </div>
        </aside>

        {products.map((data) => (
          <div className="item_shop item--01" key={data.id}>
            <h2>{data.title}</h2>
            <img src={data.productImg} class="shop-img" alt="Car" />
            <p>{data.description}</p>
            <h5>{data.price}</h5>
          </div>
        ))}
      </main>
    </>
  );
};

export default Shop;
