// import { useState } from "react";
import "../Slider/Slider.css";

import 'swiper/css';

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import 'swiper/css/navigation';





function Slider() {
  return (
    <>
      <div className="slider">
        <div className="slider-container">
          <h2>Trending Now</h2>
          <div className="customSlider">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              slidesPerView={6}
              scrollbar={true}
              style={{
                marginTop:"22px",
              }}
            >
              <SwiperSlide style={{width:"140px",height:"196px"}}><img src="src/assets/IMG1.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG2.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG3.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG4.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG5.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG6.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG7.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG8.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG9.webp"></img></SwiperSlide>
              <SwiperSlide><img src="src/assets/IMG10.webp"></img></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
