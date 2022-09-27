import React from "react";
import styles from "./Item.module.scss";
import { motion } from "framer-motion";
const Item = ({ heading, image, para }) => {
  return (
    <div className="item" id={styles.item} data-dot="<button>03</button>">
      <section className={styles.card_container}>
        <img src={image} alt="" />
        <section className={styles.card_content}>
          <section className={styles.drop_animation}>
            <div className={styles.drop}></div>
            <div className={styles.drop}></div>
            <div className={styles.drop}></div>
            <div className={styles.drop}></div>
          </section>
          <section className="container">
            <section className="row">
              <section className="col-lg-6 justify-self-start">
                <ul className={styles.content}>
                  <motion.li
                    className={styles.rectanlge}
                    animate={{
                      translateX: [10, 20, 10],
                      translateY: [10, 20, 10],
                      transition: {
                        duration: 3,
                        repeat: "Infinity",
                        type: "tween",
                      },
                    }}
                  ></motion.li>
                  <li className={styles.heading}>
                    <h1>{heading}</h1>
                  </li>
                  <li className={styles.paragraph}>
                    <p>{para}</p>
                  </li>
                  <li className={styles.default}>
                    <button> More About</button>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Item;
