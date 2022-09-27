import React from "react";
import styles from "./Employee.module.scss";
const EmployeeCard = () => {
  return (
    <ul className={styles.number_container}>
      <li>
        <h1>450</h1>
      </li>
      <li>
        <p>No of Employee</p>
      </li>
    </ul>
  );
};

export default EmployeeCard;
