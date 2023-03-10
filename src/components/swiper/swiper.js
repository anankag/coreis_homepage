import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper.css";
import "swiper/css/bundle";
import "./styles.css";
import { Navigation } from "swiper";
import slider1 from "../../assets/images/slide1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";
import slider4 from "../../assets/images/slider4.png";

function Slider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-size": "25px",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="overlay">
            <img src={slider1} alt="slider img"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <img src={slider2} alt="slider img"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <img src={slider3} alt="slider img"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <img src={slider4} alt="slider img"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
