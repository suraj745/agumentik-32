import React from "react";
import styles from "./Sidebar.module.scss";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { ImCross, ImLocation } from "react-icons/im";
import SidebarContact from "./SidebarContact/SidebarContact";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { motion } from "framer-motion";
import SocialIcon from "./Social_Icon/SocialIcon";

const Sidebar = ({ closeSidebar }) => {
  const contact_card = [
    {
      icon: <AiTwotonePhone />,
      heading: "phone number",
      contact: "(075) 123-7654(contact number)",
    },
    {
      icon: <AiOutlineMail />,
      heading: "email address",
      contact: "XYZ@gmail.com",
    },
    {
      icon: <ImLocation />,
      heading: "address info",
      contact: "Agumentik'c address",
    },
  ];

  const socialIcon = [
    <FaFacebookF />,
    <FaGoogle />,
    <FaInstagram />,
    <CgTwitter />,
    <FaTwitter />,
    <FaYoutube />,
  ];
  return (
    <motion.section
      className={styles.sidebar_container}
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ x: 1000 }}
    >
      <section className="container">
        <section className="row flex-column justify-content-center align-items-center">
          <section className="col">
            <ul className={styles.cross}>
              <li>
                <ImCross fontSize={"2rem"} onClick={closeSidebar} />
              </li>
            </ul>
            {contact_card.map((value, index) => {
              return (
                <SidebarContact
                  key={index}
                  icon={value.icon}
                  heading={value.heading}
                  contact={value.contact}
                />
              );
            })}
          </section>
          <section className="col">
            <SocialIcon
              icon={socialIcon.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            />
          </section>
        </section>
      </section>
    </motion.section>
  );
};

export default Sidebar;
