import React from "react";
import Company from "../../Components/AboutCompany/Company";
import Broucher from "../../Components/Broucher/Broucher";
import { Contact } from "../../Components/Contact/Contact";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Value2 from "../../Components/Value/Value2";

const index = () => {
  return (
    <div>
      <Broucher />
      <Company />
      <Value2 />
      <Testimonials />
      <Value2 flexDirection={"row-reverse"} />
      <Contact />
    </div>
  );
};

export default index;
