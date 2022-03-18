import React from "react";
import "./footer.css";
// import "../../../App.css";

const Footer = () => {
  return (
    <footer className="main-footer_container">
      <div className="main-footer_item">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="main-footer_social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ArriolaHarold2001"
        >
          <img src="../../../img/logo/icons8-github.svg" alt="github logo" />
        </a>
      </div>
      <div className="main-footer_item">
        <img
          src="../../../img/logo/nucaprints-logo_white.webp"
          alt="NucaPrints logo"
          className="footer-img"
        />
        <p>&copy; 2021 NucaPrints</p>
      </div>
    </footer>
  );
};

export default Footer;
