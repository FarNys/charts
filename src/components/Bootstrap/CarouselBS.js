import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselBS = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="carousel_slick_container">
      {" "}
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="carousel_child_container">
          <p>A</p>
          <p>B</p>
          <p>C</p>
          <p>D</p>
        </div>
        <div className="carousel_child_container">
          <p>A0A</p>
          <p>B</p>
          <p>C</p>
          <p>DD</p>
        </div>
        <div className="carousel_child_container">
          <p>AKT</p>
          <p>B</p>
          <p>C</p>
          <p>DD</p>
        </div>
        <div className="carousel_child_container">
          <p>A</p>
          <p>B</p>
          <p>CCCC</p>
          <p>D</p>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselBS;
