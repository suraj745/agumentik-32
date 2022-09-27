import React from "react";
import styles from "./LatestBlogCard.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaUserAlt,
  FaComments,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const LatestBlogCard = ({ heading, paragraph, user, date, month }) => {
  const socialIcon = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaYoutube />,
    <FaInstagram />,
  ];
  return (
    <ul className={styles.latest_card_container}>
      <li className={styles.image}>
        <img src="/images/services/1.jpg" alt="" />

        <section className={styles.tag}>
          <h1>{date}</h1>
          <p>{month}</p>
        </section>
      </li>
      <li className={styles.content}>
        <ul>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.status}>
            <section className={styles.user}>
              <FaUserAlt />
              <span>{user}</span>
            </section>
            <section className={styles.comment}>
              <FaComments />
              <span>0 Comments</span>
            </section>
          </li>
          <li className={styles.para}>
            <p>{paragraph}</p>
          </li>
          <li className={styles.last}>
            <section className={styles.readmore}>
              <h4>
                Read More <AiOutlineArrowRight className={styles.arrow} />
              </h4>
            </section>

            <section className={styles.social}>
              {socialIcon.map((value, index) => {
                return <span key={index}>{value}</span>;
              })}
            </section>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default LatestBlogCard;
