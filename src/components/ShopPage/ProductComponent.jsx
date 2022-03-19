import React, { useState } from "react";
import Data from "../../data/products.json";

const ProductComponent = () => {
  const [products, setProducts] = useState(Data.products);
  return (
    <>
      {products.map((data) => (
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
