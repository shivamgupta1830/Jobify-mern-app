import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

import Logo from "./Logo";

import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <div className={showSidebar ? "hidden md:hidden" : "hidden md:block"}>
      <div className="px-9 py-6 flex flex-col justify-start items-center gap-12  h-[100vh]">
        <header>
          <Logo />
        </header>
        <NavLinks isBigSidebar={true} />
      </div>
    </div>
  );
};

export default BigSidebar;
