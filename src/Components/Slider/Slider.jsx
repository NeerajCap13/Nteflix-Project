// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import "../Slider/Slider.css";
import CARDModal from "./CARDModal";

const Images = [
  "src/assets/IMG1.jpg",
  "src/assets/IMG2.jpg",
  "src/assets/IMG3.jpg",
  "src/assets/IMG4.jpg",
  "src/assets/IMG5.jpg",
  "src/assets/IMG6.jpg",
  "src/assets/IMG7.jpg",
  "src/assets/IMG8.jpg",
  "src/assets/IMG9.jpg",
  "src/assets/IMG10.jpg",
];
const CardDataAPI = {
  Data1 : {
        cardImage : "src/assets/ModalImages/IMG1.jpg",
        cardTitle : "src/assets/ModalImages/Wednesday.webp",
        cardDiscription : {
            year : "2024",
            certificate : "U/A 16+",
            type : "Show",
            genre : [ "Comedies","Fantasy","Mysteries"]
            },
        cardContent : "Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy."
          },
  Data2 : {
        cardImage : "src/assets/ModalImages/IMG2.jpg",
        cardTitle : "src/assets/ModalImages/KapilShow.webp",
        cardDiscription : {
            year : "2025",
            certificate : "U/A 13+",
            type : "Show",
            genre : [ "Talk Shows","Comedies","Variety TV"]
            },
        cardContent : "Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast."
          },
  Data3 : {
        cardImage : "src/assets/ModalImages/IMG3.jpg",
        cardTitle : "src/assets/ModalImages/Raid2.webp",
        cardDiscription : {
            year : "2025",
            certificate : "U/A 13+",
            type : "Movie",
            genre : [ "Thrillers","Dramas"]
            },
        cardContent : "Transferred to a small town in Rajasthan, an honest income tax officer pursues a beloved politician whose public good deeds conceal rampant corruption."
          },
  Data4 : {
        cardImage : "src/assets/ModalImages/IMG4.jpg",
        cardTitle : "src/assets/ModalImages/SquidGames.webp",
        cardDiscription : {
            year : "2025",
            certificate : "A",
            type : "Show",
            genre : [ "Thrillers","Dramas"]
            },
        cardContent : "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."
          },
  Data5 : {
        cardImage : "src/assets/ModalImages/IMG5.jpg",
        cardTitle : "src/assets/ModalImages/Mandala.webp",
        cardDiscription : {
            year : "2025",
            certificate : "A",
            type : "Show",
            genre : [ "Thrillers","Mysteries","Dramas"]
            },
        cardContent : "When a series of ritualistic murders shakes a small town, a detective and an ex-cop must investigate a mystery with deep ties to their pasts."
          },
  Data6 : {
        cardImage : "src/assets/ModalImages/IMG6.jpg",
        cardTitle : "src/assets/ModalImages/Saare Jahan.webp",
        cardDiscription : {
            year : "2025",
            certificate : "U/A 16+",
            type : "Show",
            genre : [ "Thrillers","Dramas"]
            },
        cardContent : "A resilient Indian spy must defeat his counterpart across the border in a battle of wits and tradecraft to sabotage their nuclear program."
          },
  Data7 : {
        cardImage : "src/assets/ModalImages/IMG7.jpg",
        cardTitle : "src/assets/ModalImages/Jaat.webp",
        cardDiscription : {
            year : "2025",
            certificate : "U/A 16+",
            type : "Movie",
            genre : [ "Action"]
            },
        cardContent : "When a series of ritualistic murders shakes a small town, a detective and an ex-cop must investigate a mystery with deep ties to their pasts."
          },
  Data8 : {
        cardImage : "src/assets/ModalImages/IMG8.jpg",
        cardTitle : "src/assets/ModalImages/ApJaisa.webp",
        cardDiscription : {
            year : "2025",
            certificate : "U/A 16+",
            type : "Movie",
            genre : [ "Comedies","Romance","Dramas"]
            },
        cardContent : "Shrirenu lives by tradition. Madhu lives unapologetically. When their paths cross, a tender romance unfolds — awkward, sweet but shadowed by patriarchy."
          },
  Data9 : {
        cardImage : "src/assets/ModalImages/IMG9.jpg",
        cardTitle : "src/assets/ModalImages/HitCase.webp",
        cardDiscription : {
            year : "2025",
            certificate : "A",
            type : "Movie",
            genre : [ "Thrillers"]
            },
        cardContent : "When a series of ritualistic murders shakes a small town, a detective and an ex-cop must investigate a mystery with deep ties to their pasts."
          },
  Data10 : {
        cardImage : "src/assets/ModalImages/IMG10.jpg",
        cardTitle : "src/assets/ModalImages/Chava.webp",
        cardDiscription : {
            year : "2025",
            certificate : "U/A 16+",
            type : "Movie",
            genre : [ "Action","Dramas"]
            },
        cardContent : "After the death of his father, warrior-king Sambhaji Maharaj battles Mughal forces led by Aurangzeb to keep the Maratha Empire alive."
          },

} 

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

  const [openModal,setOpenModal] =useState(false)
  const [selectedCardData,setSelectedCardData] =useState(null)

  const modalOpen =(dataSrc)=> {
    setSelectedCardData(CardDataAPI[dataSrc])
    setOpenModal(true)
  }
  const closeModal = () => setOpenModal(false)

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
            <CARDModal isOpen={openModal} onClose={closeModal} cardData={selectedCardData}/>
            {Images.map((src, index) => {
              const cardKey = `Data${index+1}`;
              return (
              <li className="carouselImage" key={index} onClick={()=>modalOpen(cardKey)}>
                <span datatype={index + 1} className="number"></span>
                <img src={src} alt={`${index}`} className="img"  />
              </li>
            )})}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slider;
