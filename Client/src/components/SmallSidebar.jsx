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
          ? "md:hidden absolute top-5 bottom-5 right-5 left-5 min-h-[100vh] w-[90%] p-5 rounded-sm bg-gray-200 z-10"
          : " hidden md:hidden absolute top-5 bottom-5 right-5 left-5 min-h-[100vh] w-[90%] p-5 rounded-sm bg-gray-200 z-10"
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

          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
