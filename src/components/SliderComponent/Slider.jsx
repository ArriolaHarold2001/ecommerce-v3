import React, { useState } from "react";
import Data from "../../data/products.json";
import BtnSlider from "./BtnSlider";
import "./slider.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== Data.slider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Data.slider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Data.slider.length);
    }
  };

  return (
    <>
      <div className="testimonial-container">
        <h2>Thanks to our loyal customers</h2>
        <div className="slider-container">
          {Data.slider.map((e, index) => (
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
