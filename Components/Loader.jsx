import React from "react";
import { Bars } from "react-loader-spinner";
import styles from "./Loader.module.scss";
const Loader = () => {
  return (
    <section className="container_fluid" id={styles.loader_container}>
      <Bars
        heigth="300"
        width="300"
        color="white"
        ariaLabel="loading-indicator"
      />
    </section>
  );
};

export default Loader;
