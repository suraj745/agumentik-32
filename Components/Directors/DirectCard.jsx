import React from "react";
import styles from "./DirectCard.module.scss";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const DirectCard = ({ image, name, post, paragraph }) => {
  const socialIcon = [
    <FaFacebookF />,
    <FaGoogle />,
    <FaInstagram />,
    <FaTwitter />,
    <FaYoutube />,
  ];
  return (
    <ul className={styles.directcard_container}>
      <li className={styles.image}>
        <img src={image} alt="" />
      </li>
      <li className={styles.name}>
        <h1>{name}</h1>
      </li>
      <li className={styles.post}>
        <p>{post}</p>
      </li>

      <li className={styles.paragraph}>
        <p>{paragraph}</p>
      </li>
      <li className={styles.social}>
        {socialIcon.map((value, index) => {
          return <span key={index}>{value}</span>;
        })}
      </li>
    </ul>
  );
};

export default DirectCard;
