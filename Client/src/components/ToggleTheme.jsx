import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/DashboardLayout";

const ToggleTheme = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <button type="button" onClick={toggleDarkTheme} className="text-violet-600">
      {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
};

export default ToggleTheme;
