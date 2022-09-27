import React from "react";
import About from "../Components/About/ACard/AboutPage/About";
import Company from "../Components/AboutCompany/Company";
import Banner from "../Components/Banner/Banner";
import Blog from "../Components/Blog/Blog";
import { Contact } from "../Components/Contact/Contact";
import Gallery from "../Components/Gallery/Gallery";
import Mission from "../Components/Misson/Mission";
import Services from "../Components/Services/Services";
import Subscribe from "../Components/Subscribe/Subscribe";
import Testimonials from "../Components/Testimonials/Testimonials";
import Value from "../Components/Value/Value";

const index = () => {
  return (
    <div>
      <Banner />
      <About />
      <Company />
      <Value />
      <Mission />
      <Services />
      <Contact />
      <Gallery />
      <Blog />
      <Testimonials />
    </div>
  );
};

export default index;
