import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./featuredSectionsStyles.css";

const FeaturedProducts1 = () => {
  const SQL_IP = "3.23.99.126";
  const [fireProducts, setFireProducts] = useState([]);

  const getData = () => {
    Axios.get(`http://${SQL_IP}:8000/api/featured-products`)
      .then((response) => {
        setFireProducts(response.data);
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
      {fireProducts
        .filter((item) => {
          if (item.category === "fire") {
            return item;
          }
        })
        .map((fireContent) => (
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
