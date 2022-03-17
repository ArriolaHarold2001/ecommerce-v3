import React, { useState } from "react";
import Data from "../../data/products.json";
import "./featuredSectionsStyles.css";

const FeaturedProducts1 = () => {
  const [fireProducts, setFireProducts] = useState(Data.featuredProducts);
  return (
    <>
      {fireProducts.fireSection.map((fireContent) => (
        <div className="featured-item featured-item--01" key={fireContent.id}>
          <h3>{fireContent.title}</h3>
          <img src={fireContent.productImg} alt="Print of a fire" />
          <p>{fireContent.description}</p>
        </div>
      ))}
    </>
  );
};

export default FeaturedProducts1;
