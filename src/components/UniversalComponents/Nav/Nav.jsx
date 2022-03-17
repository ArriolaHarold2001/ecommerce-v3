import React, { useState } from "react";
// import "../../../App.css";
import "./navStyles.css";

const Nav = () => {
  let [navItem, setNavItem] = useState("false");

  function showNav() {
    setNavItem("true");

    if (navItem === "true") {
      setNavItem("false");
    }

    return navItem;
  }

  return (
    <>
      <button className="mobile-nav-toggle" onClick={showNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mobile-nav_logo"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nav className="nav-section_main nav-section_main-mobile">
        <div className="nav-section_logo">
          <a href="/home">NucaPrints</a>
        </div>
        <div className="nav-section_spacer" data-visible={navItem}>
          <a href="/home">Home</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
