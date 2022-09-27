import React from "react";
import Broucher from "../../Components/Broucher/Broucher";
import { Contact } from "../../Components/Contact/Contact";
import Verify from "../../Components/Verify/Verify";

const index = () => {
  return (
    <div>
      <Broucher />
      <Verify thin={"get in"} thick={"touch"} />
    </div>
  );
};

export default index;
