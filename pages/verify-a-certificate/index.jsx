import React from "react";
import BestEmployee from "../../Components/BestEmployee/BestEmployee";
import Broucher from "../../Components/Broucher/Broucher";
import Broucher2 from "../../Components/Broucher/Broucher2";
import LatestBlog from "../../Components/LatestBlog/LatestBlog";
import Verify from "../../Components/Verify/Verify";

const index = () => {
  return (
    <div>
      <Broucher />
      <Verify thick={"an employee"} thin={"verify"} />

      <Broucher2 />
      <BestEmployee />
      <Broucher />
      <LatestBlog />
    </div>
  );
};

export default index;
