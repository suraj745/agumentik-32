import React from "react";
import Award from "../../Components/Award.jsx/Award";
import Broucher from "../../Components/Broucher/Broucher";
import Verify from "../../Components/Verify/Verify";

const index = () => {
  return (
    <div>
      <Broucher />
      <Verify thick={"in touch"} thin={"get"} />
      <Award thick={" & RECOGNITIONS"} thin={"AWARD"} />
    </div>
  );
};

export default index;
