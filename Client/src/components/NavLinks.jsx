import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="flex flex-col justify-start items-center gap-5 font-normal">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className=" hover:text-violet-600 w-full flex justify-start gap-4 items-center hover:translate-x-1 transition-all"
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <span>{icon}</span>
            <span className="capitalize">{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
