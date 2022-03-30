import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./featuredSectionsStyles.css";

const FeaturedProducts2 = () => {
  const SQL_IP = "18.117.176.218";
  const [leatherProducts, setLeatherProducts] = useState([]);

  const getData = () => {
    Axios.get(`http://${SQL_IP}:8000/api/featured-products`)
      .then((response) => {
        setLeatherProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {leatherProducts
        .filter((item) => {
          if (item.category === "portrait") {
            return item;
          }
        })
        .map((leatherContent) => (
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
