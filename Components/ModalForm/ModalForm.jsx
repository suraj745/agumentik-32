import React, { useState } from "react";
import styles from "./ModalForm.module.scss";
import Heading from "../ContainerHead/Heading";
import { motion, AnimatePresence } from "framer-motion";
const ModalForm = ({ close }) => {
  const animation = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: { opacity: 0 },
  };

  const second = {
    hide: { y: 500 },
    show: {
      y: 0,
    },

    exit: {
      y: 500,
    },
  };
  return (
    <motion.section
      className="container_fluid"
      id={styles.modal_container}
      variants={animation}
      initial={"hide"}
      animate={"show"}
      exit={"exit"}
      style={{ overflow: "hidden" }}
    >
      {open && (
        <motion.section
          className="container"
          variants={second}
          initial={"hide"}
          animate={"show"}
          exit={"exit"}
        >
          <section
            className="row justify-content-center flex-column"
            id={styles.form_container}
          >
            <section className="col">
              <ul className={styles.top}>
                <li>
                  <Heading thick={"Form"} thin={"contact"} />
                </li>
              </ul>
            </section>
            <sectio className="col d-flex justify-content-center">
              <form action="" className={styles.form_container}>
                <section className={styles.name}>
                  <a>Name</a>
                  <input type="text" placeholder="Type Your Name" />
                </section>

                <section className={styles.email}>
                  <a>Email</a>
                  <input type="text" placeholder="Type Your Email" />
                </section>

                <section className={styles.url}>
                  <a>Url</a>
                  <input type="text" placeholder="Type Your Url" />
                </section>

                <section className={styles.comment}>
                  <a>Comment</a>
                  <textarea type="text" placeholder="Type Your Comment" />
                </section>

                <section className={styles.buttons}>
                  <span>
                    <section className={styles.default}>
                      <button onClick={close}>Close</button>
                    </section>
                  </span>
                  <span>
                    <section className={styles.default}>
                      <button onClick={(e) => e.preventDefault()}>
                        Submit
                      </button>
                    </section>
                  </span>
                </section>
              </form>
            </sectio>
          </section>
        </motion.section>
      )}
    </motion.section>
  );
};

export default ModalForm;
