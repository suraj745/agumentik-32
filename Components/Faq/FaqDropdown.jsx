import React from "react";
import styles from "./FaqDropdown.module.scss";
import { motion } from "framer-motion";
const FaqDropdown = ({ head, para, id }) => {
  return (
    <section className={styles.dropdown_container}>
      <section className={styles.card_container}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}> {head}</label>
        <section className={styles.content}>
          <p>{para}</p>
        </section>
      </section>
    </section>
  );
};

export default FaqDropdown;
