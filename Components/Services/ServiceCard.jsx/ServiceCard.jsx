import React from "react";
import styles from "./ServiceCard.module.scss";
import { FaUserAlt } from "react-icons/fa";
const ServiceCard = ({ icon, number, heading, paragraph }) => {
  return (
    <ul className={styles.servicecard_container}>
      <li className={styles.image_container}>
        <ul className={styles.logo}>
          <li>{icon}</li>
          <li className={styles.name}>
            <h1>{heading}</h1>
          </li>
        </ul>
        <span className={styles.number}>
          <h1>{number}</h1>
        </span>
      </li>

      <li className={styles.paragraph}>
        <p>{paragraph}</p>
      </li>
      <li className={styles.default}>
        <button>Read More</button>
      </li>
    </ul>
  );
};

export default ServiceCard;
