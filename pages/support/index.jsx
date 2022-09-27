import React from "react";
import Broucher from "../../Components/Broucher/Broucher";
import { Contact } from "../../Components/Contact/Contact";
import Faq2 from "../../Components/Faq2/Faq2";
import OurTeam from "../../Components/OurTeam/OurTeam";
import WithForm from "../../Components/WithForm/WithForm";

const index = () => {
  return (
    <div>
      <Broucher />
      <WithForm />
      <Faq2 />
    </div>
  );
};

export default index;
