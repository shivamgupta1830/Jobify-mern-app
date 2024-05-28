import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className="h-20 w-full flex flex-row justify-between items-center px-8">
      <button type="button" onClick={toggleSidebar}>
        <FaAlignLeft className="text-violet-600 text-2xl font-semibold" />
      </button>
      <div>
        <h4 className="md:hidden text-xl font-bold text-violet-600">
          Dashboard
        </h4>
        <div className="hidden md:inline-block">
          <Logo />
        </div>
      </div>
      <div className="flex justify-between items-center gap-5 ">
        <ToggleTheme />
        <LogoutContainer />
      </div>
    </div>
  );
};

export default Navbar;
