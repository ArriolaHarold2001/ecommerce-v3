import React, { useState } from "react";
// import "../../../App.css";
import "./navStyles.css";

const Nav = () => {
  const primaryNav = document.querySelector(".nav-section_spacer");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  // let [navItem, setNavItem] = useState(primaryNav);

  // const primaryNav = document.querySelector(".nav-section_spacer");

  const showNav = () => {
    const navVisibility = primaryNav.getAttribute("data-visible");
    // setNavItem = "true";

    if (navVisibility === "false") {
      primaryNav.setAttribute("data-visible", true);
    } else {
      primaryNav.setAttribute("data-visible", true);
    }
  };

  return (
    <>
      <button class="mobile-nav-toggle" onCLick={showNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mobile-nav_logo"
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
      <nav class="nav-section_main nav-section_main-mobile">
        <div class="nav-section_logo">
          <a href="/home">NucaPrints</a>
        </div>
        <div class="nav-section_spacer" data-visible="false">
          <a href="/home">Home</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
