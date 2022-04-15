import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./featuredSectionsStyles.css";

const FeaturedProducts1 = ({ fireProducts }) => {
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
