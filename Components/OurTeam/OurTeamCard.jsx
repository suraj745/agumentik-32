import React from "react";
import styles from "./OurTeamCard.module.scss";
const OurTeamCard = ({ name, post, image }) => {
  return (
    <ul className={styles.card_container}>
      <li className={styles.image}>
        <img src={image} alt="" />
      </li>
      <li className={styles.content}>
        <ul>
          <li className={styles.name}>
            <h2>{name} </h2>
          </li>
          <li className={styles.port}>
            <p>{post}</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default OurTeamCard;
