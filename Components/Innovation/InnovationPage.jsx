import React from "react";
import Heading from "../ContainerHead/Heading";
import styles from "./InnovationPage.module.scss";
import Innovation from "./Innovation";
import { motion } from "framer-motion";
const InnovationPage = () => {
  const innovationData = [
    {
      img: "/images/gallery/portrait/pic1.jpg",
      name: "Columbia Sport Center",
      date: "2013-14",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.",

      left: "none",
    },

    {
      img: "/images/gallery/portrait/pic1.jpg",
      name: "Museum Expansion ",
      date: "2017-18",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.",

      right: "none",

      direction: "row-reverse",
    },

    {
      img: "/images/gallery/portrait/pic1.jpg",
      name: "Park Boathouse ",
      date: "2015-16",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.",

      left: "none",
    },

    {
      img: "/images/gallery/portrait/pic1.jpg",
      name: "Park Boathouse ",
      date: "2017-18",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.",

      right: "none",
      direction: "row-reverse",
    },
  ];
  return (
    <motion.section
      className="container-fluid"
      id={styles.innovation_container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ once: true }}
    >
      <section className="container">
        <section className="row content_pad flex-column">
          <section className="col">
            <Heading thin={"Our"} thick={"Innovation"} />
          </section>
          <section className="col">
            {innovationData.map((value, index) => {
              return (
                <Innovation
                  key={index}
                  name={value.name}
                  left={value.left}
                  date={value.date}
                  right={value.right}
                  paragraph={value.paragraph}
                  direction={value.direction && value.direction}
                />
              );
            })}
          </section>
        </section>
      </section>
    </motion.section>
  );
};

export default InnovationPage;
