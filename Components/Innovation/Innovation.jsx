import React from "react";
import styles from "./Innovation.module.scss";
import { motion } from "framer-motion";
const Innovation = ({
  date,
  name,
  image,
  paragraph,
  right,
  left,
  direction,
}) => {
  return (
    <section id={styles.innovation_card_container} className={"container"}>
      <section className="row" style={{ flexDirection: direction }}>
        <section className="col-lg-5">
          <section className={styles.image_container}>
            <section className={styles.design2} style={{ display: left }}>
              <section className={styles.circle2}></section>
            </section>

            <img src="/images/gallery/portrait/pic1.jpg" />
            <section className={styles.design} style={{ display: right }}>
              <section className={styles.circle}></section>
            </section>
          </section>
        </section>
        <section className="col-lg-7 d-flex align-items-center mt-3 mt-lg-0">
          <ul className={styles.right_content}>
            <li className={styles.date}>
              <h1>{date}</h1>
            </li>
            <li className={styles.name}>
              <p>{name}</p>
            </li>
            <li className={styles.paragraph}>
              <p>{paragraph}</p>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Innovation;
