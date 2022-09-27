import React from "react";
import styles from "./Searc.module.scss";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
const Search = ({ close }) => {
  return (
    <motion.section
      className="container-fluid"
      id={styles.search_container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="container">
        <section className="row">
          <section className="col">
            <ul>
              <li>
                <ImCross className={styles.cross} onClick={close} />
              </li>
              <li>
                <input type="text" placeholder="Search" />
                <button>
                  <FaSearch />
                </button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </motion.section>
  );
};

export default Search;
