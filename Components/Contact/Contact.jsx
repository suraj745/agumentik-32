import React from "react";
import styles from "./Contact.module.scss";
export const Contact = () => {
  return (
    <section className={styles.contact_container}>
      <section className="container">
        <section className="row content_pad justify-content-center">
          <section className={styles.contact_grid}>
            <ul className={styles.left_container}>
              <li className={styles.heading}>
                <h1>
                  <span>Contact</span>Agumentik
                </h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.there are many Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Unde variations of passages of Ipsum
                  available,
                </p>
              </li>
              <li className={styles.number}>
                <p>
                  <strong>(+291)-456-789-1234</strong>
                </p>
              </li>
              <li className={styles.default}>
                <button>Contact us</button>
              </li>
            </ul>

            <section className={styles.middle_container}>
              <img src="/images/mission.jpg" alt="" />
            </section>

            <ul className={styles.right_container}>
              <li className={styles.heading}>
                <h1>
                  <span>Let's</span>Work together
                </h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Lorem ipsum, dolor sit amet
                  consectetur adipisicing .
                </p>
              </li>
              <li>
                <ul className={styles.buttons}>
                  <li className={styles.default}>
                    <button>Contact Us</button>
                  </li>
                  <li className={styles.default}>
                    <button>help</button>
                  </li>
                  <li className={styles.default}>
                    <button>webinar</button>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};
