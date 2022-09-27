import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import MobileDropdown from "../MobileDropdown/MobileDropdown";
import styles from "./MobileNavbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
const MobileNavbar = ({ navData, close }) => {
  const container = {
    hidden: { height: "0rem" },
    show: {
      height: "max-content",
      transition: {
        type: "tween",
        staggerChildren: 0.1,
      },
    },

    exit: {
      opacity: "0",
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.section
      className={styles.mobile_container}
      variants={container}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
    >
      <section className="container">
        <section className="row">
          <ul className={styles.menu}>
            {navData.map((value, index) => {
              return (
                <motion.li
                  className={styles.menu_list}
                  id="drop_menu"
                  variants={listItem}
                >
                  {value.dropdown && (
                    <input type="checkbox" name="" id={value.main_name} />
                  )}

                  <label
                    className={styles.menu_list_name}
                    htmlFor={value.main_name}
                  >
                    <Link href={value.page_link}>
                      <span>{value.main_name}</span>
                    </Link>
                    {value.dropdown && (
                      <span>
                        <AiOutlineRight />
                      </span>
                    )}
                  </label>

                  {value.dropdown && (
                    <MobileDropdown
                      dropList={value.dropdown.map((value, index) => {
                        return (
                          <Link href={value.link} passHref key={index}>
                            <li
                              className={styles.drop_list_name}
                              id="drop_list"
                              onClick={close}
                            >
                              <input type="checkbox" id={value.main_name} />
                              <label
                                htmlFor={value.main_name}
                                className="d-flex justify-content-between"
                              >
                                {value.main_name}
                                <span>
                                  {value.sub_menu && <AiOutlineRight />}
                                </span>
                              </label>

                              {value.sub_menu && (
                                <ul className={styles.sub_menu_container}>
                                  {value.sub_menu.map((value, index) => {
                                    return (
                                      <Link
                                        href={value.link}
                                        passHref
                                        key={index}
                                      >
                                        <li
                                          onClick={close}
                                          className={styles.sub_menu_list}
                                          key={index}
                                        >
                                          {value.main_name}
                                        </li>
                                      </Link>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          </Link>
                        );
                      })}
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>
        </section>
      </section>
    </motion.section>
  );
};

export default MobileNavbar;
