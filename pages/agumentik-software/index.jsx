import React from "react";
import Award from "../../Components/Award.jsx/Award";
import Broucher from "../../Components/Broucher/Broucher";
import { Contact } from "../../Components/Contact/Contact";
import ContactTeam from "../../Components/ContactTeam/ContactTeam";
import Services from "../../Components/Services/Services";
import BrandSwiper from "../../Components/Value/BrandSwiper";
import Value from "../../Components/Value/Value";
import CompaniesSummary from "../../Components/CompaniesSummary/CompaniesSummary";
const index = () => {
  return (
    <div>
      <Broucher />
      <Value />
      <Contact />
      <Services />
      <Award thin={"Awards"} thick={"& recognitions"} color={"black"} />
      <ContactTeam />
      <CompaniesSummary />
    </div>
  );
};

export default index;
