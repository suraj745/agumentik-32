import React from "react";
import styles from "./ACard.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
const ACard = ({ image, heading, para }) => {
  const container = {
    hidden: false,
    show: {
      transition: {
        type: "tween",
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { translateY: 200 },
    show: {
      translateY: 0,
      transition: { duration: 0.5, type: "tween", when: "beforeChildren" },
    },
  };

  const plus = {
    hidden: { translateX: 200 },
    show: { translateX: 0 },
  };

  return (
    <motion.ul
      className={styles.about_card_container}
      variants={container}
      initial={"hidden"}
      whileHover={"show"}
    >
      <li className={styles.top_content}>
        <img src={image} alt="" />
      </li>
      <motion.li className={styles.bottom_content} variants={listItem}>
        <ul className={styles.about_card_content}>
          <li className={styles.left}>
            <h2>{heading}</h2>
            <p>{para}</p>
          </li>
          <motion.li className={styles.plus_icon} variants={plus}>
            <AiOutlinePlus />
          </motion.li>
        </ul>
      </motion.li>
    </motion.ul>
  );
};

export default ACard;
