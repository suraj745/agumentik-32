import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import styles from "./Subscribe.module.scss";
const Subscribe = () => {
  return (
    <ul className={styles.sub_container}>
      <li className={styles.left_content}>
        <h1>subscribe to our newsletter!</h1>
        <p>
          never miss anything from agumentik by signing up to our newsletter
        </p>
      </li>
      <li className={styles.right_content}>
        <input type="text" placeholder="Enter Your Email" />
        <button>
          <FaRegPaperPlane />
        </button>
      </li>
    </ul>
  );
};

export default Subscribe;
