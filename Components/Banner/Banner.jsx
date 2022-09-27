import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel3";
import styles from "./Banner.module.scss";
import Item from "./Item/Item";
const Banner = () => {
  const BannerData = [
    {
      image: "/Agumen_Images/banner/slide1.83183f0b.jpg",
      heading: "We build your dream",
      para: "it is a long established fact that  a reader will be distracted by the readable content",
    },
    {
      image: "/Agumen_Images/banner/slide2.5fb464c8.jpg",
      heading: "From concept to creation",
      para: "it is a long established fact that  a reader will be distracted by the readable content",
    },
    {
      image: "/Agumen_Images/banner/slide3.b12c9dec.jpg",
      heading: "Making dreams come to life",
      para: "it is a long established fact that  a reader will be distracted by the readable content",
    },
  ];
  return (
    <section className={styles.carousel_container} id={"banner_carousel"}>
      <OwlCarousel className="owl-theme" loop margin={10} items={1}>
        {BannerData.map((value, index) => {
          return (
            <Item
              key={index}
              heading={value.heading}
              image={value.image}
              para={value.para}
            />
          );
        })}
      </OwlCarousel>
    </section>
  );
};

export default Banner;
