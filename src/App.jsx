import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Shop from "./components/ShopPage/Shop";
import Contact from "./components/ContactPage/Contact";
import Axios from "axios";
// import "./App.css";

function App() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [shopPageFilter, setShopPageFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    Axios.get(`http://nucaprints.com:8000/api/featured-products`)
      .then((response) => {
        setFeaturedProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });

    Axios.get(`http://nucaprints.com:8000/api/drop-filter`)
      .then((response) => {
        setShopPageFilter(response.data);
      })
      .catch((err) => {
        throw err;
      });

    Axios.get(`http://nucaprints.com:8000/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });

    Axios.get(`http://nucaprints.com:8000/api/slider`)
      .then((response) => {
        setSlider(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage featuredProducts={featuredProducts} slider={slider} />
          }
        />
        <Route
          path="/shop"
          element={<Shop shopPageFilter={shopPageFilter} products={products} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
