// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import "../Slider/Slider.css";
import CARDModal from "./CARDModal";
import CardDataAPI from './CardDataAPI'
import Images from './Images'


function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

const Slider = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = useWindowWidth();
  const visibleCount = width <= 767 ? 4 : width >= 768 ? 5 : 6;

  const nextSlide = () => {
    if (currentIndex < Images.length - visibleCount) {
      setCurrentIndex(currentIndex + 3);
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
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = currentIndex * (180 + 50);
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const modalOpen = (dataSrc) => {
    setSelectedCardData(CardDataAPI[dataSrc]);
    setOpenModal(true);
  };
  const closeModal = () => setOpenModal(false);

  return (
    <>
      <div className="slider">
        <div className="slider-container">
          <h2 className="sliderHead">Trending Now</h2>
        </div>
        <div className="sliderContained">
          <div className="leftSlider">
            {currentIndex > 0 && (
              <button className="leftButton" onClick={prevSlide}>
                {"<"}
              </button>
            )}
          </div>
          <div className="rightSlider">
            {currentIndex < Images.length - visibleCount && (
              <button className="rightButton" onClick={nextSlide}>
                {">"}
              </button>
            )}
          </div>
          <ul className="image-slider" ref={containerRef}>
            <CARDModal
              isOpen={openModal}
              onClose={closeModal}
              cardData={selectedCardData}
            />
            {Images.map((src, index) => {
              const cardKey = `Data${index + 1}`;
              return (
                <li
                  className="carouselImage"
                  key={index}
                  onClick={() => modalOpen(cardKey)}
                >
                  <span datatype={index + 1} className="number"></span>
                  <img src={src} alt={`${index}`} className="img" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slider;
