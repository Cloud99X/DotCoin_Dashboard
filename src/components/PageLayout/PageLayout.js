import React from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Sidebar/header";

const PageLayout = ({ children, activeMenu }) => {
  return (
    <div className="flex">
      <Sidebar activeMenu={activeMenu} />
      <div className="flex flex-col gap-10 w-full px-5">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
