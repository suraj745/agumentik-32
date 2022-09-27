import React from "react";
import Broucher from "../../Components/Broucher/Broucher";
import { Contact } from "../../Components/Contact/Contact";
import Cources from "../../Components/Cources/Cources";
import Value from "../../Components/Value/Value";
import Award from "../../Components/Award.jsx/Award";
import WithForm from "../../Components/WithForm/WithForm";
const index = () => {
  return (
    <div>
      <Broucher />
      <Value />
      <Contact />
      <Cources />
      <Award thin={"Awards"} thick={"& recognitions"} color={"black"} />
      <WithForm />
      <Award thick={"& RECOGNITIONS"} thin={"AWARD"} color={"black"} />
    </div>
  );
};

export default index;
