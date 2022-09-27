import React from "react";
import styles from "./CompanyCard.module.scss";
const CompanyCard = () => {
  return (
    <ul className={styles.company_card}>
      <li className={styles.heading}>
        <h1>
          <span>Agumentik</span> provides superior quality and results.
        </h1>
      </li>
      <li className={styles.boldPara}>
        <strong>
          Contrary to popular belief, lorem Ipsum is not simply text. It has
          roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old.
        </strong>
      </li>
      <li className={styles.para}>
        <p>
          There are many variations of passages of lorem available, but the
          majority have suffered alteration in some form, by inject humour, or
          randomised words which don't look even slightly believable.
        </p>
      </li>
      <li className={styles.default}>
        <button>Read More</button>
      </li>
    </ul>
  );
};

export default CompanyCard;
