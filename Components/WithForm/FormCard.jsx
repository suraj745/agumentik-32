import React from "react";
import styles from "./FormCard.module.scss";
const FormCard = ({ open, image, name }) => {
  return (
    <ul className={styles.formcard_container} onClick={open}>
      <li className={styles.image}>
        <img src={image} alt="" />
      </li>
      <li className={styles.content}>
        <p>{name}</p>
      </li>
    </ul>
  );
};

export default FormCard;
