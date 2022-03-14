import React, { useState } from "react";
import Nav from "../UniversalComponents/Nav/Nav";
import LandingHero from "../UniversalComponents/Hero/LandingHero";
import Footer from "../UniversalComponents/Footer/Footer";
import Data from "../../data/products.json";
import "./landing.css";

const LandingPage = () => {
  const [featProducts, setFeatProducts] = useState(Data.featuredProducts);
  return (
    <>
      <LandingHero />
      <main>
        <section class="featured-section_main">
          <header class="featured-section_heading">
            <h2>Hot Prints</h2>
            <p>Check out our latest and freshest prints</p>
          </header>

          {featProducts.fireSection.map((fireContent) => (
            <div
              className="featured-item featured-item--01"
              key={fireContent.id}
            >
              <h3>{fireContent.title}</h3>
              <img src={fireContent.productImg} alt="Print of a fire" />
              <p>{fireContent.description}</p>
            </div>
          ))}
        </section>

        <section class="featured-section_second">
          <header class="featured-section_heading">
            <h2>Check out our leather collection</h2>
            <p>
              Specialist NucaPrints designer will handcraft the clothes you buy
            </p>
          </header>
          {Data.featuredProducts.leatherSection.map((leatherContent) => (
            <div
              className="featured-item featured-item--01"
              key={leatherContent.id}
            >
              <h3>{leatherContent.title}</h3>
              <img src={leatherContent.productImg} alt="#" />
              <p>{leatherContent.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default LandingPage;
