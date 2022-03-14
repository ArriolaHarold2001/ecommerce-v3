import React from "react";
import Footer from "./components/UniversalComponents/Footer/Footer";
import Nav from "./components/UniversalComponents/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import Shop from "./components/ShopPage/Shop";
import Contact from "./components/ContactPage/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <LandingPage />
      <Shop />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
