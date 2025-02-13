import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Image imports (or use URLs)
const images = [
  "../assets/gutters-foundation.jpg",
  "../assets/roof-draft.jpg",
  "../assets/roof-defense.jpg",
  "../assets/hidden-problems.jpg",
  "../assets/save-energy.jpg",
  "../assets/roof.jpg",
  "../assets/spot-problem.jpg",
];

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-60 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full z-10 opacity-50 hover:opacity-100"
  >
    <FaArrowLeft size={30} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-60 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full z-10 opacity-50 hover:opacity-100"
  >
    <FaArrowRight size={30} />
  </button>
);

export default function Slideshow() {
  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 5000, // Slide changes every 3 seconds
    arrows: true, // Show left/right arrows
    prevArrow: <PrevArrow />, // Custom left arrow
    nextArrow: <NextArrow />, // Custom right arrow
  };

  return (
    <div className="mb-30">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="place-self-center w-auto h-[80vh]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
