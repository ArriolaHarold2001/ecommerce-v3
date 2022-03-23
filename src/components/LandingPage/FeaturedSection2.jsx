import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import "./featuredSectionsStyles.css";

const FeaturedProducts2 = () => {
  const [leatherProducts, setLeatherProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/");
  });

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
