import React from "react";
import Heading from "../ContainerHead/Heading";
import BrandSwiper from "../Value/BrandSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Award.module.scss";
import "swiper/css";

const Award = ({ thin, thick, color }) => {
  const swiperImage = [
    "/Slider1.png",
    "/Slider2.png",
    "/Slider3.png",
    "/Slider4.png",
    "/Slider5.png",
    "/Slider6.png",
  ];
  return (
    <section className="container-fluid">
      <section className="row flex-column content_pad">
        <section className="col">
          <Heading thin={thin} thick={thick} color={color} />
        </section>
        <section className="col">
          <Swiper
            id={styles.brand_slider}
            slidesPerView={6}
            loop={true}
            autoplay={true}
            breakpoints={{
              0: { slidesPerView: 2 },
              410: { slidesPerView: 3 },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            {swiperImage.map((value, index) => {
              return (
                <SwiperSlide key={index} id={styles.brand_slide}>
                  <img src={value} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </section>
    </section>
  );
};

export default Award;
