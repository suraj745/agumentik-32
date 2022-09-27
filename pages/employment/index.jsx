import React from "react";
import AboutBroucher from "../../Components/AboutBroucher/AboutBroucher";
import AboutCompany from "../../Components/AboutCompany/Company";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Value2 from "../../Components/Value/Value2";
const index = () => {
  return (
    <div>
      <AboutBroucher />
      <AboutCompany />
      <Value2 />
      <Testimonials />
      <Value2 flexDirection={"row-reverse"} display={"none"} />
    </div>
  );
};

export default index;
