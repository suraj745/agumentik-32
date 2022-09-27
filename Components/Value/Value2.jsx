import React from "react";
import Heading from "../ContainerHead/Heading";
import BrandSwiper from "./BrandSwiper";
import EmployeeCard from "./EmployeeCard";
import styles from "./Value.module.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import Graph from "./Graph";
const Value2 = ({ flexDirection, display }) => {
  const graph = [
    {
      name: `Architecher`,
      percentage: `85%`,
    },
    {
      name: `Construction`,
      percentage: `78%`,
    },
    {
      name: `Building`,
      percentage: `65%`,
    },
    {
      name: `Interior`,
      percentage: `40%`,
    },
    {
      name: `Commercial`,
      percentage: `55%`,
    },
  ];
  return (
    <section className="container">
      <section
        className="row content_pad justify-content-around"
        style={{ flexDirection: `${flexDirection}` }}
      >
        <section className="col-lg-4">
          <ul className={styles.left_content}>
            <li className={styles.heading}>
              <Heading thin={"Our"} thick={"Value"} color={"black"} />
            </li>
            <li className={styles.para}>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.there are many variations of passages of Ipsum available,
              </p>
            </li>
            {/* <li className={styles.sign}>
              <img src="/Signature.png" alt="signature" />

              <section>
                <p>Name</p>
                <p>Our Founder</p>
              </section>
            </li>
            <li className={styles.video}>
              <img src="/Agumen_Images/logo/logo-light.865dd6b2.png" alt="" />

              <section className={styles.play_icon}>
                <section className={styles.icon}>
                  <AiFillPlayCircle fontSize={"8rem"} />
                </section>
              </section>
            </li> */}
          </ul>
        </section>
        <section
          className={
            "col-lg-4 d-flex justify-content-center align-items-center flex-column mt-5 mt-lg-0 d-none"
          }
        >
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </section>

        <section className="col-lg-4 mt-5 mt-lg-0">
          <ul className={styles.right_content}>
            <li className={styles.heading}>
              <h1>
                <span>We have</span> <span>15 years</span> experience in
                industry with leading Brands
              </h1>
            </li>
            <li>
              <ul className={styles.sliders}>
                {graph.map((value, index) => {
                  return (
                    <li key={index}>
                      <Graph percentage={value.percentage} name={value.name} />
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Value2;
