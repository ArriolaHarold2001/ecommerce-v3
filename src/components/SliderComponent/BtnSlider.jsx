import React from "react";
import "./slider.css";
import leftArrow from "./arrows/left-arrow.svg";
import rightArrow from "./arrows/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onTouchEnd={moveSlide}
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
};

export default BtnSlider;
