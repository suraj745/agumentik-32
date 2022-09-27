import React from "react";
import styles from "./Heading.module.scss";
const Heading = ({ thin, thick, color }) => {
  return (
    <ul className={styles.heading_top}>
      <li className={styles.design}>
        <span></span>
        <span></span>
      </li>
      <li className={styles.heading}>
        <span>{thin}</span>
        <span style={{ color: color }}>{thick}</span>
      </li>
      <li className={styles.design}>
        <span></span>
        <span></span>
      </li>
    </ul>
  );
};

export default Heading;
