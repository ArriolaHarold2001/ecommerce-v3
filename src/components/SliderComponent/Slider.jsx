import Axios from "axios";
import React, { useEffect, useState } from "react";
import BtnSlider from "./BtnSlider";
import "./slider.css";

const Slider = ({ slider }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slider.length);
    }
  };

  return (
    <>
      <div className="testimonial-container">
        <h2>Thanks to our loyal customers</h2>
        <div className="slider-container">
          {slider.map((e, index) => (
            <div
              key={e.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                alt={e.alt}
                src={
                  process.env.PUBLIC_URL +
                  `/img/testimonials/slide-image${index + 1}.jpeg`
                }
              />
            </div>
          ))}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
      </div>
    </>
  );
};

export default Slider;
