import React from "react";
import Appointment from "../Components/Appointment/Appointment";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer/Footer";
const Layout = ({ children }) => {
  const [openSide, setOpenSider] = useState(false);
  return (
    <>
      <AnimatePresence>
        {openSide && <Sidebar closeSidebar={() => setOpenSider(!openSide)} />}
      </AnimatePresence>
      <nav>
        <Appointment />
        <Navbar openSidebar={() => setOpenSider(!openSide)} />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
