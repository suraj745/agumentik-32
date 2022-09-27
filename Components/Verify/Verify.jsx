import React from "react";
import Heading from "../ContainerHead/Heading";
import styles from "./Verify.module.scss";
const Verify = ({ thin, thick }) => {
  return (
    <section className="container-fluid" id={styles.verify_container}>
      <section className="container">
        <section className="row content_pad flex-column">
          <section className="col" id={styles.form_top_container}>
            <Heading thin={thin} thick={thick} />
          </section>
          <section className="col d-flex " id={styles.form_container}>
            <section className={styles.form_main_container}>
              <form>
                <ul>
                  <li>
                    <input type="text" placeholder="Name" />
                  </li>
                  <li>
                    <input type="text" placeholder="Email" />
                  </li>
                  <li>
                    <input type="text" placeholder="Phone" />
                  </li>
                  <li>
                    <input type="text" placeholder="Textarea" />
                  </li>
                  <li className={styles.default}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Check Now
                    </button>
                  </li>
                </ul>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Verify;
