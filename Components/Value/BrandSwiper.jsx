import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./BrandSwiper.module.scss";

import { Autoplay } from "swiper";
const BrandSwiper = () => {
  const swiperImage = [
    "/Slider1.png",
    "/Slider2.png",
    "/Slider3.png",
    "/Slider4.png",
    "/Slider5.png",
    "/Slider6.png",
  ];
  return (
    <div>
      <Swiper
        // centeredSlides={true}
        spaceBetween={5}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {swiperImage.map((value, index) => {
          return (
            <SwiperSlide key={index} className={styles.slide}>
              <img src={value} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
