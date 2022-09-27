import React from "react";
import Heading from "../ContainerHead/Heading";
import ServiceCard from "../Services/ServiceCard.jsx/ServiceCard";

import styles from "../Services/Services.module.scss";

import { FaUserAlt, FaMedal } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { BsCalendarEventFill } from "react-icons/bs";
const serviceData = [
  {
    icon: <FaUserAlt />,
    number: 1,
    heading: "Verify Employee",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    icon: <FaMedal />,
    number: 2,
    heading: "Verify Certificate",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    icon: <ImEarth />,
    number: 3,
    heading: "CSR",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    icon: <BsCalendarEventFill />,
    number: 4,
    heading: "Events",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },

  {
    icon: <FaUserAlt />,
    number: 5,
    heading: "service",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    icon: <FaMedal />,
    number: 6,
    heading: "service",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    icon: <ImEarth />,
    number: 7,
    heading: "CSR",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },

  {
    icon: <ImEarth />,
    number: 8,
    heading: "CSR",
    paragraph:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
];

const Services2 = () => {
  return (
    <section className={styles.service_container}>
      <section className="container">
        <section
          className="row 
        content_pad flex-column"
        >
          <section className="col">
            <ul className={styles.top}>
              <li className={styles.heading}>
                <Heading thick={"Services"} thin={"Our"} />
              </li>
              <li className={styles.para}>
                <p>
                  <strong>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                  </strong>
                </p>
              </li>
            </ul>
          </section>
          <section className="col">
            <section className={styles.service_grid}>
              {serviceData.map((value, index) => {
                return (
                  <section key={index}>
                    <ServiceCard
                      icon={value.icon}
                      number={value.number}
                      heading={value.heading}
                      paragraph={value.paragraph}
                    />
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Services2;
