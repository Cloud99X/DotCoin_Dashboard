import React from "react";
import DocumentSVG from "../../assets/svg/Document.svg";
import ActiveDocumentSVG from "../../assets/svg/DocumentActive.svg";
import ChartSVG from "../../assets/svg/Chart.svg";
import ActiveChartSVG from "../../assets/svg/ChartActive.svg";
import SettingsSVG from "../../assets/svg/Setting.svg";
import ActiveSettingsSVG from "../../assets/svg/SettingActive.svg";

//
const Sidebar = ({ activeMenu }) => {
  const SidebarMenu = [
    { name: "Markets", logo: DocumentSVG, activeLogo: ActiveDocumentSVG },
    { name: "Prediction", logo: ChartSVG, activeLogo: ActiveChartSVG },
    {
      name: "Dotcoin AI",
      logo: ActiveDocumentSVG,
      activeLogo: ActiveDocumentSVG,
    },
    {
      name: "Settings",
      logo: SettingsSVG,
      activeLogo: ActiveSettingsSVG,
    },
  ];

  const activeMenuStyles =
    "pl-3 mb-2 flex gap-5 cursor-pointer text-[#355DFF] bg-[#191B20] rounded-lg py-3";
  const menuStyles =
    "pl-3 mb-2 flex gap-5 cursor-pointer hover:bg-[#191B20] transition-all duration-300 text-[#808191] rounded-lg py-3";

  //

  //
  return (
    <div className="flex flex-col px-5 space-y-20 min-w-[200px] border-r">
      <img src="/images/logo-dark.svg" alt="BitCloud" className="pt-5" />
      <div>
        {SidebarMenu.map((menu, index) => (
          <div
            className={activeMenu === menu.name ? activeMenuStyles : menuStyles}
            key={index}
          >
            <img
              src={activeMenu === menu.name ? menu.activeLogo : menu.logo}
              alt=""
            />
            <p>{menu.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
