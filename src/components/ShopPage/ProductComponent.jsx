import React, { useState, useEffect } from "react";
import Axios from "axios";

const ProductComponent = ({ filterOption, products }) => {
  return (
    <>
      {products
        .filter((vary) => {
          if (filterOption === "All") {
            return vary;
          } else if (filterOption === "Price < $50" && vary.price < 50.0) {
            return vary;
          } else if (filterOption === "Price > $15" && vary.price > 15.0) {
            return vary;
          } else if (
            filterOption === "Fire Prints" &&
            vary.category === "fire"
          ) {
            return vary;
          } else if (
            filterOption === "Portraits" &&
            vary.category === "portrait"
          ) {
            return vary;
          } else if (
            filterOption === "Nature Prints" &&
            vary.category === "nature"
          ) {
            return vary;
          } else if (filterOption === "Car Prints" && vary.category === "car") {
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
