import React from "react";
import Heading from "../ContainerHead/Heading";
import CourceCard from "./CourceCard";
import { FaBuilding, FaPaintBrush, FaClipboardList } from "react-icons/fa";
import { IoConstructSharp } from "react-icons/io5";
import { GiBunkBeds } from "react-icons/gi";
import { TbGeometry } from "react-icons/tb";
import styles from "./Cources.module.scss";
const Cources = () => {
  const data = [
    {
      image: <FaBuilding />,
      name: "ROOMS & HALLS",
      paragraph: `lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.`,
    },

    {
      image: <FaPaintBrush />,
      name: "RENOVATION",
      paragraph: `lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.`,
    },
    {
      image: <IoConstructSharp />,
      name: `CONSTRUCTION`,
      paragraph: `lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.`,
    },
    {
      image: <GiBunkBeds />,
      name: `INTERIOR`,
      paragraph: `lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.`,
    },
    {
      image: <FaClipboardList />,
      name: `PROFESSIONAL OPINION
      `,
      paragraph: `lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.`,
    },
    {
      image: <TbGeometry />,
      name: `ACCURATE ENGINEeRING
      `,
      paragraph: `lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.`,
    },
  ];
  return (
    <section className="container-fluid" id={styles.cources_container}>
      <section className="container">
        <section className="row content_pad flex-column">
          <section className="col">
            <Heading thick={"cources"} thin={"our"} />
          </section>
          <section className="col" id={styles.bottom}>
            {data.map((value, index) => {
              return (
                <CourceCard
                  key={index}
                  image={value.image}
                  heading={value.name}
                  para={value.paragraph}
                />
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Cources;
