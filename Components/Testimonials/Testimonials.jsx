import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "../ContainerHead/Heading";

const Testimonials = () => {
  const testinomial = [
    {
      name: "shelly johnson",
      post: "business person",
      image: "/images/testimonials/pic1.jpg",
      para: `The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's`,
    },
    {
      name: "curthbert brain-",
      post: "contractor",
      image: "/images/testimonials/pic1.jpg",
      para: "The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      name: "Cathrine wagner",
      post: "Builder",
      image: "/images/testimonials/pic1.jpg",
      para: `The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's`,
    },
    {
      name: "john doe-",
      post: "business person",
      image: "/images/testimonials/pic1.jpg",
      para: `The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's`,
    },
    {
      name: "curthbert brain",
      post: "business person",
      image: "/images/testimonials/pic1.jpg",
      para: `The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's`,
    },
    {
      name: "shelly johnson",
      post: "business person",
      image: "/images/testimonials/pic1.jpg",
      para: `The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's`,
    },
  ];
  return (
    <section className={styles.testiomonial_container}>
      <section className="container">
        <section className="row flex-column content_pad">
          <section className="col">
            <Heading thick={"Testinomial"} thin={"Client"} color={"black"} />
          </section>
          <section className="col">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className={styles.test_swiper}
              id={"test_swiper"}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                990: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              autoplay
            >
              {testinomial.map((value, index) => {
                return (
                  <SwiperSlide key={index} className={styles.card_holder}>
                    <TestimonialCard
                      image={value.image}
                      name={value.name}
                      post={value.post}
                      para={value.para}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Testimonials;
