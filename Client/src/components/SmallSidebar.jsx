import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";

import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <div
      className={
        showSidebar
          ? "md:hidden absolute top-5 bottom-5 right-5 left-5 h-[90%] w-[90%] p-5 rounded-sm bg-gray-200"
          : " hidden md:hidden absolute top-5 bottom-5 right-5 left-5 h-[90%] w-[90%] p-5 rounded-sm bg-gray-200"
      }
    >
      <div>
        <button
          className="text-violet-600 font-semibold text-xl cursor-pointer"
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>
        <div className="flex flex-col justify-start items-center">
          <header className="mb-10">
            <Logo />
          </header>
          {/* <div className="flex flex-col justify-start items-center gap-4 font-normal">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className=" hover:text-violet-600 w-full flex justify-start gap-4 items-center hover:translate-x-1 transition-all"
                  onClick={toggleSidebar}
                >
                  <span>{icon}</span>
                  <span className="capitalize">{text}</span>
                </NavLink>
              );
            })}
          </div> */}
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
