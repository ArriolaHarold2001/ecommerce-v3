import React, { useState } from "react";
import Data from "../../data/products.json";
import "./featuredSectionsStyles.css";

const FeaturedProducts2 = () => {
  const [leatherProducts, setLeatherProducts] = useState(Data.featuredProducts);
  return (
    <>
      {leatherProducts.leatherSection.map((leatherContent) => (
        <div
          className={`featured-item featured-item--01 ${
            leatherContent.id === "5" ? "featured-item_span" : null
          }`}
          key={leatherContent.id}
        >
          <h3>{leatherContent.title}</h3>
          <img src={leatherContent.productImg} alt={leatherContent.alt} />
          <p>{leatherContent.description}</p>
        </div>
      ))}
    </>
  );
};

export default FeaturedProducts2;
