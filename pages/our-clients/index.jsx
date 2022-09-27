import React from "react";
import Broucher2 from "../../Components/Broucher/Broucher2";
import { Contact } from "../../Components/Contact/Contact";
import Clients from "../../Components/OurClients/Clients";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import BrandSwiper from "../../Components/Value/BrandSwiper";
import Value from "../../Components/Value/Value";
const index = () => {
  return (
    <div>
      <Broucher2 />
      <Value />
      {/* client */}
      <Clients />
      <Testimonials />
      <Services />
      <Contact />
    </div>
  );
};

export default index;
