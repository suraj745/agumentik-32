import React from "react";
import styles from "./Dropdown.module.scss";
const Dropdown = ({ listName }) => {
  return <ul className={styles.dropdown_container}>{listName}</ul>;
};

export default Dropdown;
