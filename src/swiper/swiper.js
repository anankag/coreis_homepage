import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper.css";
import "swiper/css/bundle";
import "/Users/anna/coreis-homepage/src/swiper/swiper.css";
import { Navigation } from "swiper";
import slider1 from "/Users/anna/coreis-homepage/src/assets/images/slide1.png";
import slider2 from "/Users/anna/coreis-homepage/src/assets/images/slider2.png";
import slider3 from "/Users/anna/coreis-homepage/src/assets/images/slider3.png";
import slider4 from "/Users/anna/coreis-homepage/src/assets/images/slider4.png";

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
            <img src={slider1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <img src={slider2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <img src={slider3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <img src={slider4} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
