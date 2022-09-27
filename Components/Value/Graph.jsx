import React from "react";
import styles from "./Graph.module.scss";
const Graph = ({ percentage, name }) => {
  return (
    <section className={styles.graph_container}>
      <section className={styles.top}>
        <label>{name}</label>
        <p>{percentage}</p>
      </section>
      <section className={styles.graph}>
        <section className={styles.red} style={{ width: percentage }}></section>
      </section>
    </section>
  );
};

export default Graph;
