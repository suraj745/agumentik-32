import React from "react";
import Heading from "../ContainerHead/Heading";
import DirectCard from "./DirectCard";
import styles from "./Directors.module.scss";
const Directors = () => {
  const cardData = [
    {
      img: "/images/our-team4/pic1.png",
      name: "avie beaton",
      post: "ceo & architect",
      para: "Which is worse, that everyone has his price, or that the price is always so low.",
    },
    {
      img: "/images/our-team4/pic1.png",
      name: "ben johnson",
      post: " architect",
      para: "Which is worse, that everyone has his price, or that the price is always so low.",
    },
    {
      img: "/images/our-team4/pic1.png",
      name: "ashley fletcher",
      post: "finances",
      para: "Which is worse, that everyone has his price, or that the price is always so low.",
    },
  ];
  return (
    <section className="container-fluid" id={styles.direct_container}>
      <section className="container">
        <section
          className="row content_pad flex-column
        "
        >
          <section className="col">
            <Heading thick={"Directors"} thin={"Board of"} color={"black"} />
          </section>
          <section className="col" id={styles.right_content}>
            {cardData.map((value, index) => {
              return (
                <DirectCard
                  key={index}
                  image={value.img}
                  name={value.name}
                  paragraph={value.para}
                  post={value.post}
                />
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Directors;
