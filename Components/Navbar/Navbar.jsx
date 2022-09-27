import styles from "./Navbar.module.scss";
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Dropdown from "./Dropdown/Dropdown";
import Submenu from "./Submenu/Submenu";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Search from "../Search/Search";
const Navbar = ({ openSidebar }) => {
  // toggle_dropdown
  const [search, setSearch] = useState(false);
  const navData = [
    {
      main_name: "Home",
      page_link: "/",
    },
    {
      main_name: "About",
      second_part: "Us",
      page_link: "/about",
      dropdown: [
        {
          main_name: "About Agumentik Group",
          link: "#",
        },
        {
          main_name: "About Organization",
          link: "#",
        },
        {
          main_name: "Our Innovations",
          link: "#",
        },
        {
          main_name: "Gallery",
          link: "#",
        },
      ],
    },
    {
      main_name: "Companies",
      page_link: "/agumentik-software",
      dropdown: [
        {
          main_name: "Agumentik Software",
          link: "/agumentik-software",
        },
        {
          main_name: "Agumentik Educamp",
          link: "/agumentik-educamp",
        },
        {
          main_name: "Agumentik Consultancy",
          link: "/agumentik-consultancy",
        },
      ],
    },
    {
      main_name: "Associations",
      page_link: "/apply-for-partnerships",
      dropdown: [
        {
          main_name: "Apply for partnerships",
          link: "/apply-for-partnerships",
        },
        {
          main_name: "our clients",
          link: "/our-clients",
        },
        {
          main_name: "our corporate partners",
          link: "/our-corporate-partners",
        },
        {
          main_name: "our institution partners",
          link: "/our-institution-partners",
        },
      ],
    },
    {
      main_name: "Carrer",
      page_link: "#",
      dropdown: [
        {
          main_name: "Employment",
          link: "/employment",
        },
        {
          main_name: "insternships",
          link: "/internships",
        },
        {
          main_name: "campus experts",
          link: "/campus-experts",
        },
      ],
    },
    {
      main_name: "Forums",
      page_link: "#",
      dropdown: [
        {
          main_name: "verify an employee",
          link: "/verify-an-employee",
        },
        {
          main_name: "verify a certificate",
          link: "/verify-a-certificate",
        },
        {
          main_name: "CSR",
          link: "/csr",
        },
      ],
    },
    {
      main_name: "Info",
      page_link: "#",
      dropdown: [
        {
          main_name: "Blogs",
          link: "/blog",
        },
        {
          main_name: "media & events",
          link: "",
          sub_menu: [
            {
              main_name: "Media",
              link: "/media",
            },
            {
              main_name: "Events",
              link: "/event",
            },
          ],
        },
        {
          main_name: "webinar",
          link: "/webinar",
        },
        {
          main_name: "contact us",
          link: "/contact-us",
        },
        {
          main_name: "invite us",
          link: "/invite-us",
        },
        {
          main_name: "support",
          link: "/support",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className={styles.navbar_container}>
        <section className="container">
          <section className="row align-items-center">
            <section className="col">
              <Link href={"/"} passHref>
                <section className={styles.navbar_logo}>
                  <img
                    src="/Agumen_Images/logo/logo-light.865dd6b2.png"
                    alt=""
                  />
                </section>
              </Link>
            </section>
            <section
              className="col d-flex justify-content-end"
              style={{ gap: "2rem" }}
            >
              {/* navbar_menus */}
              <ul className={styles.navbar_menus}>
                {navData.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link href={value.page_link}>
                        <a className="d-flex">
                          <span>{value.main_name}</span>
                          {value.second_part && (
                            <span>{value.second_part}</span>
                          )}
                        </a>
                      </Link>
                      {value.dropdown && (
                        <section className={styles.dropdown_main_container}>
                          <Dropdown
                            listName={value.dropdown.map((value, index) => {
                              return (
                                <Link href={value.link} passHref key={index}>
                                  <li className="d-flex justify-content-between">
                                    {value.main_name}
                                    {value.sub_menu && (
                                      <span className={styles.icon}>
                                        <AiOutlineRight />
                                      </span>
                                    )}

                                    {value.sub_menu && (
                                      <Submenu
                                        subList={value.sub_menu.map(
                                          (value, index) => {
                                            return (
                                              <Link
                                                href={value.link}
                                                passHref
                                                key={index}
                                              >
                                                <li>{value.main_name}</li>
                                              </Link>
                                            );
                                          }
                                        )}
                                      />
                                    )}
                                  </li>
                                </Link>
                              );
                            })}
                          />
                        </section>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* hamburger menu */}
              <ul className={styles.ham_menus}>
                <li className={styles.search}>
                  <AiOutlineSearch
                    fontSize={"2.5rem"}
                    onClick={() => setSearch(!search)}
                  />
                </li>
                <li className={styles.arrow}>
                  <span>
                    <AiOutlineLeft
                      fontSize={"2.5rem"}
                      className={`animate_animated animate__shakeX`}
                      onClick={openSidebar}
                    />
                  </span>
                </li>
                <li className={styles.hamburger}>
                  <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    rounded
                    size={25}
                  />
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>

      <AnimatePresence>
        {search && (
          <Search
            close={() => {
              setSearch(!search);
            }}
          />
        )}
        {isOpen && <MobileNavbar navData={navData} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
