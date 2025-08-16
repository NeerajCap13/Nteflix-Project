// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import "../Slider/Slider.css";

const Images = [
  "src/assets/IMG1.webp",
  "src/assets/IMG2.webp",
  "src/assets/IMG3.webp",
  "src/assets/IMG4.webp",
  "src/assets/IMG5.webp",
  "src/assets/IMG6.webp",
  "src/assets/IMG7.webp",
  "src/assets/IMG8.webp",
  "src/assets/IMG9.webp",
  "src/assets/IMG10.webp",
];

const Slider = () => {
  const containerRef =useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 6;

  const nextSlide = () => {
    if (currentIndex < Images.length - visibleCount ) {
      setCurrentIndex(currentIndex + 4);
    }
    if (currentIndex >= 9) {
      setCurrentIndex(0);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  useEffect(()=>{
    const container = containerRef.current;
    if(container){
      const scrollAmount = currentIndex * (180 + 50);
      container.scrollTo({
        left : scrollAmount,
        behavior : "smooth"
      })
    }
  },[currentIndex])
  return (
    <>
      <div className="slider">
        <div className="slider-container">
          <h2 className="sliderHead">Trending Now</h2>
        </div>
        <div className="sliderContained">
          <div className="leftSlider">
            <button className="leftButton" onClick={prevSlide}>{"<"}</button>
          </div>
          <div className="rightSlider">
            <button className="rightButton" onClick={nextSlide}>{">"}</button>
          </div>
          <ul className="image-slider" ref={containerRef}>
            {Images.map((src, index) => (
              <li className="carouselImage" key={index} >
                <span datatype={index+1} className="number" ></span>
                <img src={src} alt={`${index}`} className="img" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slider;
