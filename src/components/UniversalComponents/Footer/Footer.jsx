import React from "react";
import "./footer.css";
// import "../../../App.css";

const Footer = () => {
  return (
    <footer class="main-footer_container">
      <div class="main-footer_item">
        <a href="index.html">Home</a>
        <a href="product.html">Shop</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="main-footer_social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ArriolaHarold2001"
        >
          <img src="../../../img/logo/icons8-github.svg" alt="github logo" />
        </a>
      </div>
      <div class="main-footer_item">
        <img
          src="../../../img/logo/nucaprints-logo_white.webp"
          alt="NucaPrints logo"
          class="footer-img"
        />
        <p>&copy; 2021 NucaPrints</p>
      </div>
    </footer>
  );
};

export default Footer;
