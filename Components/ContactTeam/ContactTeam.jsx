import React from "react";
import Heading from "../ContainerHead/Heading";
import styles from "./ContactTeam.module.scss";
import { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import { AnimatePresence } from "framer-motion";
const ContactTeam = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="container" id={styles.contact_container}>
        <section className="row content_pad flex-column">
          <section className="col">
            <Heading thin={"contact"} thick={"team"} color={"black"} />
          </section>
          <section className="col" id={styles.contact_card_container}>
            <section onClick={() => setOpen(!open)}>
              <img src="/images/gallery/pic3.jpg" alt="" />
            </section>
            <section onClick={() => setOpen(!open)}>
              <img src="/images/gallery/pic3.jpg" alt="" />
            </section>
          </section>
        </section>
      </section>
      <AnimatePresence>
        {open && (
          <ModalForm
            close={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactTeam;
