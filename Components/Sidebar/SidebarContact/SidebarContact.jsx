import React from "react";
import styles from "./SidebarContact.module.scss";
const SidebarContact = ({ icon, heading, contact }) => {
  return (
    <ul className={styles.sidebar_contact_card}>
      <li className={styles.icon}>{icon}</li>
      <li className={styles.heading}>
        <h3>{heading}</h3>
      </li>
      <li className={styles.contact}>
        <p>{contact}</p>
      </li>
    </ul>
  );
};

export default SidebarContact;
