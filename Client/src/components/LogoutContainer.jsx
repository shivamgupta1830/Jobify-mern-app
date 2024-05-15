import React from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <div className="relative">
      <button
        type="button"
        className="flex justify-between items-center gap-1 text-white bg-violet-600 hover:bg-violet-500 py-1 px-2 rounded-sm"
        onClick={() => {
          setShowLogout(!showLogout);
        }}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <button
        type="button"
        className={
          showLogout
            ? " absolute text-white bg-violet-600 hover:bg-violet-500 py-1 px-2 rounded-sm w-full mt-1"
            : "hidden text-white bg-violet-600 hover:bg-violet-500 py-1 px-2 rounded-sm w-full mt-1"
        }
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutContainer;
