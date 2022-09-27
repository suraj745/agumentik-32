import React, { useState } from "react";
import Heading from "../ContainerHead/Heading";
import ModalForm from "../ModalForm/ModalForm";
import FormCard from "./FormCard";
import styles from "./WithForm.module.scss";
const WithForm = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      image: `/images/gallery/pic2.jpg`,
      name: "with-form",
    },
    {
      image: `/images/gallery/pic2.jpg`,
      name: "with-form",
    },
    {
      image: `/images/gallery/pic2.jpg`,
      name: "with-form",
    },
  ];
  return (
    <section className="container" id={styles.withform_container}>
      <section className="row content_pad flex-column">
        <section className="col" id={styles.top}>
          <Heading thick={"Team"} thin={"contact"} color={"black"} />
        </section>
        <section className="col" id={styles.bottom}>
          {data.map((value, index) => {
            return (
              <FormCard
                open={() => {
                  setOpen(!open);
                }}
                name={value.name}
                image={value.image}
              />
            );
          })}
        </section>
      </section>
      {open && (
        <ModalForm
          close={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        />
      )}
    </section>
  );
};

export default WithForm;
