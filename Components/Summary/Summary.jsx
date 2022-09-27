import React from "react";
import Heading from "../ContainerHead/Heading";
import Innovation from "../Innovation/Innovation";
import styles from "./Summary.module.scss";
import { motion } from "framer-motion";
const Summary = () => {
  const summary = [
    {
      img: "/images/gallery/portrait/pic1.jpg",
      name: "Eisenhower Memoria      ",
      date: "2011-12      ",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.",

      left: "none",
    },

    {
      img: "/images/gallery/portrait/pic1.jpg",
      name: "Columbia Sport Center ",
      date: "2013-14      ",
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
      name: "Museum Expansion      ",
      date: "2017-18",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.",

      right: "none",
      direction: "row-reverse",
    },
  ];
  return (
    <section className="container-fluid" id={styles.summary_container}>
      <section className="container">
        <section className="row flex-column content_pad">
          <section className="col">
            <Heading thick={"Summary"} thin={"About"} />
          </section>
          <motion.section
            className="col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            {summary.map((value, index) => {
              return (
                <Innovation
                  key={index}
                  img={value.img}
                  name={value.name}
                  date={value.date}
                  paragraph={value.paragraph}
                  right={value.right && value.right}
                  left={value.left && value.left}
                  direction={value.direction && value.direction}
                />
              );
            })}
          </motion.section>
        </section>
      </section>
    </section>
  );
};

export default Summary;
