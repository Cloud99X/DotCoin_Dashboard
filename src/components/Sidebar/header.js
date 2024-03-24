import React, { useState } from "react";
import { HiSearch, HiBell, HiChevronDown } from "react-icons/hi";
import DownSquare from "../../assets/svg/Arrow - Down Square.svg";
import Avatar from "../../assets/svg/03 - tranmautritam.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="pt-5 flex items-center justify-between">
      <div className="flex items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          className="dark-mode rounded-sm py-1 min-w-[300px] border border-[#d1d1d6] text-sm"
        />
        <HiSearch color="#808191" size={20} />
      </div>
      <div className="flex gap-5 items-center">
        <HiBell color="#808191" size={20} />
        <img src={DownSquare} alt="" />
        <div className="flex items-center gap-5">
          <p>Eng/USD</p>
          <HiChevronDown size={20} />
        </div>
        <img src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default Header;
