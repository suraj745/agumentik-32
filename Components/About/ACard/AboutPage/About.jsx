import React, { useState } from "react";
import ACard from "../ACard";
import styles from "./AboutPage.module.scss";
import { AnimatePresence, motion } from "framer-motion";
const About = () => {
  const aboutHeading = ["w", "e", "l", "c", "o", "m", "e"];
  const aboutAnimation = {
    hidden: {},
    show: {
      opacity: {},
      transition: { duration: 0.6, staggerChildren: 0.4 },
    },
  };
  const card = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const Heading = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };
  const headingChildren = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const aboutCard = [
    {
      image: "/Agumen_Images/card/card1.jpg",
      heading: "IT Services",
      para: "Engineering your dreams with us.",
    },
    {
      image: "/Agumen_Images/card/card2.jpg",
      heading: "HR Solution",
      para: "Life is Architecture.",
    },
    {
      image: "/Agumen_Images/card/card1.jpg",
      heading: "Consultancy",
      para: "Dazzling Design",
    },
  ];
  return (
    <section className={styles.about_page_container}>
      <section className="container">
        <section className="row flex-column">
          <section className="col">
            <section className="row content_pad">
              <ul className={styles.main_heading}>
                <li>
                  <motion.h1
                    variants={Heading}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: true }}
                  >
                    {aboutHeading.map((value, index) => {
                      return (
                        <motion.span key={index} variants={headingChildren}>
                          {value}
                        </motion.span>
                      );
                    })}
                  </motion.h1>
                </li>
              </ul>
              <motion.section
                className={styles.about_cards}
                variants={aboutAnimation}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true }}
              >
                <AnimatePresence exitBeforeEnter>
                  {aboutCard.map((value, index) => {
                    return (
                      <motion.section variants={card} key={index}>
                        <ACard
                          heading={value.heading}
                          image={value.image}
                          para={value.para}
                        />
                      </motion.section>
                    );
                  })}
                </AnimatePresence>

                <ul className={styles.view_card}>
                  <li className={styles.heading}>
                    <h1>About</h1>
                    <h1>Agumentik Group.</h1>
                  </li>
                  <li className={styles.para}>
                    <p>
                      When it comes to your house, don’t mess with the rest,
                      trust the best. Making your vision come true, that is what
                      we do.
                    </p>
                  </li>
                  <li className={styles.default}>
                    <button>View All</button>
                  </li>
                </ul>
              </motion.section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
