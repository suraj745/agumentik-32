import React from "react";
import Award from "../../Components/Award.jsx/Award";
import Broucher from "../../Components/Broucher/Broucher";
import Broucher2 from "../../Components/Broucher/Broucher2";
import Gallery from "../../Components/Gallery/Gallery";
import Summary from "../../Components/Summary/Summary";

const index = () => {
  return (
    <div>
      <Broucher />
      <Broucher2 />
      <Gallery />
      <Summary />
      <Award thick={"& RECOGNITIONS"} thin={"award"} color={"black"} />
    </div>
  );
};

export default index;
