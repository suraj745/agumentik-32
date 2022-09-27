import React from "react";
import styles from "../MobileNavbar/MobileNavbar.module.scss";
const MobileDropdown = ({ dropList }) => {
  return <ul className={styles.mobile_drop_container}>{dropList}</ul>;
};

export default MobileDropdown;
