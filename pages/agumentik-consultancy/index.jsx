import React from "react";
import Award from "../../Components/Award.jsx/Award";
import Broucher from "../../Components/Broucher/Broucher";
import { Contact } from "../../Components/Contact/Contact";
import ContactTeam from "../../Components/ContactTeam/ContactTeam";
import Value from "../../Components/Value/Value";
import Services2 from "../../Components/Service2/Service2";
const index = () => {
  return (
    <div>
      <Broucher />
      <Value />
      <Contact />
      <Services2 />
      <Award thin={"AWARD"} thick={"& RECOGNITIONS"} color={"black"} />
      <ContactTeam />
      <Award thin={"AWARD"} thick={"& RECOGNITIONS"} color={"black"} />
    </div>
  );
};

export default index;
