import React from "react";
import styles from "./TestimonialCard.module.scss";
const TestimonialCard = ({ image, name, post, para }) => {
  return (
    <ul className={styles.test_card}>
      <li className={styles.image_container}>
        <img src={image} alt="" />

        <ul>
          <li>
            <h1>{name}</h1>
          </li>
          <li>
            <p>{post}</p>
          </li>
        </ul>

        <img src="/icons8-get-quote-32.png" alt="" />
      </li>
      <li className={styles.paragraph}>
        <p>{para}</p>
      </li>
    </ul>
  );
};

export default TestimonialCard;
