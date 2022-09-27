import React from "react";
import styles from "./SocialIcon.module.scss";
const SocialIcon = ({ icon }) => {
  return (
    <section className={styles.main_icon_container}>
      <ul className={styles.icon_container}>{icon}</ul>
      <h1>2022 © Agumentik Group</h1>
    </section>
  );
};

export default SocialIcon;
