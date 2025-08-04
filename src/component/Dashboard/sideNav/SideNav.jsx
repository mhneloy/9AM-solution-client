import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <div className="w-full md:w-64 h-full bg-[#f66b1d]">
        <ul className="menu text-[#000000] w-full font-bold">
          <li>
            <NavLink to="/dashboard" className={"menu-active"}>
              Task Form
            </NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="menu text-[#000000] w-full font-bold">
          <li>
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
