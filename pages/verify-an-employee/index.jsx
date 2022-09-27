import React from "react";
import About from "../../Components/About/ACard/AboutPage/About";
import BestEmployee from "../../Components/BestEmployee/BestEmployee";
import Blog from "../../Components/Blog/Blog";
import Broucher from "../../Components/Broucher/Broucher";
import Broucher2 from "../../Components/Broucher/Broucher2";
import LatestBlog from "../../Components/LatestBlog/LatestBlog";
import Verify from "../../Components/Verify/Verify";

const index = () => {
  return (
    <div>
      <Broucher />
      {/* form */}
      <Verify thick={"an employee"} thin={"verify"} />
      <Broucher2 />
      <BestEmployee />
      <LatestBlog />
    </div>
  );
};

export default index;
