import "./styles.css";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function Partners() {

  
  return (
    <>
    <div className="title">
    <h1 className="h1">ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ</h1></div>
    <div className="partnerSwiper">
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      className="partnerSlider">
        <div className="slider-wrapper">
          <SwiperSlide>
            <div className="slider-img">
              <img src={partner1} alt="partner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-img">
              <img src={partner2} alt="partner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-img">
              <img src={partner2} alt="partner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-img">
              <img src={partner2} alt="partner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-img">
              <img src={partner1} alt="partner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-img" alt="partner">
              <img src={partner2} alt="partner" />
            </div>
          </SwiperSlide>
        </div>
    </Swiper>
    </div>
    </>
  );
}
export default Partners;
