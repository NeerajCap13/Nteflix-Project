// import { useState } from "react";
import { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 6;

  // const nextSlide = () => {
  //   if (currentIndex - visibleCount < Images.length) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  //   if (currentIndex >= 9) {
  //     setCurrentIndex(0);
  //   }
  // };

  // const prevSlide = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

  return (
    <>
    
      <div className="slider">
        <div className="slider-container">
          <h2>Trending Now</h2>
          {/* <div className="customSlider"> */}

          <div className="image-slider">
            {/* <button className="leftBtn" onClick={prevSlide}>
              &lt;
            </button> */}
            <div
              className="imageTrack"
              style={{
                transform: `translateX(-${
                  (100 / visibleCount) * currentIndex
                }%)`,
              }}
            >
              {Images.map((src, index) => (
                <div className="carouselImage" key={index}>
                  <img src={src} alt={`${index}`} />
                </div>
              ))}
            </div>
            {/* {currentIndex <=2 ? (
              <button className="rightBtn" onClick={nextSlide}>
                &gt;
              </button>
            ) : (
              <button style={{ display: "hidden" }}></button>
            )} */}
          </div>
        </div>
       
      </div>
      {/* </div> */}
    
    
      
    </>
    
  );
};

export default Slider;
