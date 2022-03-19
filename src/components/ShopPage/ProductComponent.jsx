import React, { useState } from "react";
import Data from "../../data/products.json";

const ProductComponent = ({ filterOption }) => {
  const [products, setProducts] = useState(Data.products);
  return (
    <>
      {products
        .filter((vary) => {
          if (filterOption === "Price < $50" && vary.price < 50.0) {
            return vary;
          } else if (filterOption === "Price > $15" && vary.price > 15.0) {
            return vary;
          } else if (filterOption === "Fire Prints" && vary.cat === "fire") {
            return vary;
          } else if (filterOption === "Portraits" && vary.cat === "portrait") {
            return vary;
          } else if (
            filterOption === "Nature Prints" &&
            vary.cat === "nature"
          ) {
            return vary;
          } else if (filterOption === "Cars" && vary.cat === "car") {
            return vary;
          } else {
            return vary;
          }
        })
        .map((data) => (
          <div className="item_shop item--01" key={data.id}>
            <h2>{data.title}</h2>
            <img src={data.productImg} className="shop-img" alt={data.alt} />
            <p>{data.description}</p>
            <h5>${data.price}</h5>
          </div>
        ))}
    </>
  );
};

export default ProductComponent;
