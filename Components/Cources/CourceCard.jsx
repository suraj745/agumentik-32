import React from "react";
import styles from "./CourceCard.module.scss";
import { FaBuilding } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
const CourceCard = ({ image, heading, para }) => {
  return (
    <ul className={styles.card_container}>
      <li className={styles.image}>{image}</li>
      <li className={styles.content}>
        <ul>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.para}>
            <p>{para}</p>
          </li>
          <li className={styles.read_more}>
            <span>More And Enroll</span>
            <AiOutlineArrowRight className={styles.arrow} />
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default CourceCard;
