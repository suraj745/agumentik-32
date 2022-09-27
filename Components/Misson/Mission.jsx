import React from "react";
import Heading from "../ContainerHead/Heading";
import styles from "./Mission.module.scss";
import { BiCaretRight } from "react-icons/bi";
const Mission = () => {
  const list = [
    "Web Development",
    "HR Consulatncy",
    "Game Production",
    "Implementation",
    "Lead Generation",
  ];

  const buttons = [
    {
      link: "# ",
      name: "Apply for partnership",
    },
    {
      link: "# ",
      name: "Carrer",
    },
    {
      link: "# ",
      name: "Invite Us",
    },
  ];
  return (
    <section className={styles.mission_container}>
      <section className="container">
        <section
          className="row 
        content_pad flex-column"
        >
          <section className="col">
            <Heading thick={"Mission & Vision"} thin={"Our"} color={"black"} />
          </section>
          <section className="col">
            <section className="row gy-5 justify-content-center align-items-center">
              <section className="col-lg-4 d-flex justify-content-center align-items-center">
                <ul className={styles.left_content}>
                  <li className={styles.heading}>
                    <h1>
                      <span>Agumentik</span> What We Do
                    </h1>
                  </li>
                  <li className={styles.para}>
                    <p>
                      lorem Ipsum available, but the majority have suffered
                      alteration in some form, by ious versi ons have evolved
                      over the years, sometimes by accident
                    </p>
                  </li>
                  <li className={styles.list}>
                    <ul>
                      {list.map((value, index) => {
                        return (
                          <li key={index}>
                            <BiCaretRight />
                            {value}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li className={styles.default}>
                    <button>Read More</button>
                  </li>
                </ul>
              </section>
              <section className="col-lg-4 d-flex justify-content-center align-items-center">
                <section className={styles.middle_container}>
                  <img src="/images/mission.jpg" alt="" />
                </section>
              </section>
              <section className="col-lg-4 d-flex justify-content-center align-items-center">
                <ul className={styles.left_content}>
                  <li className={styles.heading}>
                    <h1>
                      <span>Know more about</span> Agumentik
                    </h1>
                  </li>
                  <li className={styles.para}>
                    <p>
                      lorem Ipsum available, but the majority have suffered
                      alteration in some form, by ious versi ons have evolved
                      over the years, sometimes by accident
                    </p>
                  </li>
                  <li>
                    <ul className={styles.button_container}>
                      {buttons.map((value, index) => {
                        return (
                          <li key={index} className={styles.default}>
                            <button>{value.name}</button>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Mission;
