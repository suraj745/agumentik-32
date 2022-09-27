import React from "react";
import About from "../../Components/About/ACard/AboutPage/About";
import Award from "../../Components/Award.jsx/Award";
import Broucher from "../../Components/Broucher/Broucher";
import Broucher2 from "../../Components/Broucher/Broucher2";
import Directors from "../../Components/Directors/Directors";
import Gallery from "../../Components/Gallery/Gallery";
import InnovationPage from "../../Components/Innovation/InnovationPage";
import Summary from "../../Components/Summary/Summary";
const index = () => {
  return (
    <div>
      <Broucher />
      <Broucher2 />
      <About />
      <Directors />
      <Award thin={"Awards"} thick={"& recognitions"} color={"black"} />
      <Summary />
      <Award thin={"Awards"} thick={"& recognitions"} color={"black"} />
      <InnovationPage />
      <Gallery />
      <Award thin={"Awards"} thick={"& recognitions"} color={"black"} />
    </div>
  );
};

export default index;
