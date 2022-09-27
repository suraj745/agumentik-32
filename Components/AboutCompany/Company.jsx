import React from "react";
import styles from "./Company.module.scss";
import CompanyCard from "./CompanyCard";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import Heading from "../ContainerHead/Heading";

// import required modules
const Company = () => {
  const carouselImage = [
    {
      img: "/pic1.jpg",
    },
    {
      img: "/pic2.jpg",
    },
  ];
  return (
    <section className={styles.company_container} id={"company_container"}>
      <section className="container">
        <section
          className="row
          content_pad
        justify-content-center align-items-center flex-column"
        >
          <section className="col">
            <Heading thin={"About"} thick={"Company"} />
          </section>
          <section className="col">
            <section className="row justify-content-center align-items-center flex-lg-row flex-column ">
              <section className="col col-lg-8 ">
                <Swiper
                  className={styles.mySwiper}
                  loop={true}
                  autoplay
                  id="company"
                  pagination={true}
                  modules={[Pagination]}
                >
                  {carouselImage.map((value, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={value.img} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </section>
              <section
                className="col col-lg-4 
              position-relative d-flex justify-content-start "
              >
                <CompanyCard />
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Company;
