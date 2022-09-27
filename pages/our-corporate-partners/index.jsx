import React from "react";
import Broucher from "../../Components/Broucher/Broucher";
import Broucher2 from "../../Components/Broucher/Broucher2";
import { Contact } from "../../Components/Contact/Contact";
import Faq from "../../Components/Faq/Faq";
import Clients from "../../Components/OurClients/Clients";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Testimonials from "../../Components/Testimonials/Testimonials";
const index = () => {
  return (
    <div>
      <Broucher />
      <Clients />
      {/* ourteam */}

      <OurTeam />
      <Broucher2 />
      <Faq />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default index;
