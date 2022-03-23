import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import "./featuredSectionsStyles.css";

const FeaturedProducts1 = () => {
  const [fireProducts, setFireProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/")
      .then((response) => {
        setFireProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  });

  return (
    <>
      {fireProducts.fireSection.map((fireContent) => (
        <div className="featured-item featured-item--01" key={fireContent.id}>
          <h3>{fireContent.title}</h3>
          <img src={fireContent.productImg} alt={fireContent.alt} />
          <p>{fireContent.description}</p>
        </div>
      ))}
    </>
  );
};

export default FeaturedProducts1;
