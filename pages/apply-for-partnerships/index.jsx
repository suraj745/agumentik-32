import React from "react";
import Broucher from "../../Components/Broucher/Broucher";
import Broucher2 from "../../Components/Broucher/Broucher2";
import ContactTeam from "../../Components/ContactTeam/ContactTeam";
import Faq from "../../Components/Faq/Faq";
import Gallery from "../../Components/Gallery/Gallery";
import Summary from "../../Components/Summary/Summary";
const index = () => {
  return (
    <div>
      <Broucher2 />
      <Broucher />
      <Faq />
      <ContactTeam />
      <Broucher />
      <Summary />
      <Gallery />
    </div>
  );
};

export default index;
