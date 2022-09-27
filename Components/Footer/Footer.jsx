import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Footer.module.scss";
import Subscribe from "../Subscribe/Subscribe";
const Footer = () => {
  const socialIcon = [
    <FaFacebookF />,
    <FaGoogle />,
    <FaInstagram />,
    <FaTwitter />,
    <FaYoutube />,
  ];
  const contact = [
    "XYZ@gmail.com",
    "(+298) 012-3456-789(contact number)",
    "(+298) 146-6543-480",
  ];

  const important = [
    {
      link: "",
      name: "support",
    },

    {
      link: "",
      name: "apply for partnership",
    },
    {
      link: "",
      name: "invite us",
    },
  ];

  const useful = [
    {
      link: "",
      name: "carrer",
    },

    {
      link: "",
      name: "webinar",
    },
    {
      link: "",
      name: "CSR",
    },
    {
      link: "",
      name: "verify certificate",
    },
    {
      link: "",
      name: "verify employee",
    },
    {
      link: "",
      name: "terms & conditios",
    },
    {
      link: "",
      name: "privacy policies",
    },
  ];

  const companies = [
    {
      link: "",
      name: "agumentik software",
    },

    {
      link: "",
      name: "agumentik consultancy",
    },
    {
      link: "",
      name: "agumentik educamp",
    },
    {
      link: "",
      name: "agumen products",
    },
    {
      link: "",
      name: "embian",
    },
  ];

  return (
    <section
      className="container-fluid px-0 d-lg-flex justify-content-center"
      id={styles.footer_container}
    >
      <Subscribe />
      <section className="container">
        <section className="row content_pad">
          <section className={styles.footer_content}>
            <ul className={styles.first}>
              <li className={styles.logo}>
                <img src="/Agumen_Images/logo/logo-light.865dd6b2.png" alt="" />
              </li>
              <li className={styles.para}>
                The pain itself is important to the main adipisicing elite. Want
                to abandon the pains of corrupt choices? I will pardon the
                consequences, no one owes me the debts which some people have,
                and a similar advantage is greater. What avoids fatigue and
                responsibilities! Indeed, by mistake. The pain itself is
                important to the main adipisicing elite. The pain itself is
                important to the main adipisicing elite.
              </li>
              <li className={styles.social}>
                {socialIcon.map((value, index) => {
                  return <span key={index}>{value}</span>;
                })}
              </li>
            </ul>
            <section>
              <ul className={styles.second}>
                <li className={styles.heading}>
                  <h1>Contact Us</h1>
                </li>

                {contact.map((value, index) => {
                  return (
                    <li key={index}>
                      <p>{value}</p>
                    </li>
                  );
                })}
              </ul>
              <ul className={styles.third}>
                <li className={styles.heading}>
                  <h1>Important Links</h1>
                </li>
                {important.map((value, index) => {
                  return (
                    <li key={index}>
                      <p>{value.name}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
            <ul className={styles.fourth}>
              <li className={styles.heading}>
                <h1>Usefull link</h1>
              </li>
              {useful.map((value, index) => {
                return (
                  <li key={index}>
                    <p>{value.name}</p>
                  </li>
                );
              })}
            </ul>

            <ul className={styles.fourth}>
              <li className={styles.heading}>
                <h1>Our Companies</h1>
              </li>
              {companies.map((value, index) => {
                return (
                  <li key={index}>
                    <p>{value.name}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;
