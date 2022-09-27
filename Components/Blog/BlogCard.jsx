import React from "react";
import styles from "./BlogCard.module.scss";
const BlogCard = ({ image, date, month, year, heading, paragraph }) => {
  return (
    <ul className={styles.blog_card_container}>
      <li className={styles.image}>
        <img src={image} alt="" />
      </li>
      <li className={styles.content}>
        <ul>
          <li className={styles.number}>
            <h1>
              {date}
              <span>
                {month} {year}
              </span>
              <span>-2 Comment</span>
            </h1>
          </li>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.paragraph}>
            <p>{paragraph}</p>
          </li>
          <li className={styles.default}>
            <button>Read More</button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default BlogCard;
