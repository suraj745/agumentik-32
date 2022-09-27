import React from "react";
import Heading from "../ContainerHead/Heading";
import BrandSwiper from "../Value/BrandSwiper";
import styles from "./Clients";
const Clients = () => {
  return (
    <section className="container" id={styles.brandswiper_container}>
      <section className="row flex-column">
        <section className="col" id={styles.left}>
          <Heading thick={"clients"} thin={"our"} color={"black"} />
        </section>
        <section className="col" id={styles.right}>
          <BrandSwiper />
          <BrandSwiper />
          <BrandSwiper />
        </section>
      </section>
    </section>
  );
};

export default Clients;
