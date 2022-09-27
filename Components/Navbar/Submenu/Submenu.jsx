import React from "react";
import styles from "./Submenu.module.scss";
const Submenu = ({ subList }) => {
  return <ul className={styles.submenu_container}>{subList}</ul>;
};

export default Submenu;
