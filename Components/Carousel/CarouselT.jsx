import React from "react";
import Banner from "../Banner/Banner";

const CarouselT = () => {
  return (
    <section>
      {BannerData.map((value, index) => {
        return (
          <Banner
            key={index}
            image={value.image}
            heading={value.heading}
            para={value.para}
          />
        );
      })}
    </section>
  );
};

export default CarouselT;
