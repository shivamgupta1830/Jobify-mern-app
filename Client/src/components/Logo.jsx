import React from "react";
import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-start items-center gap-2">
      <h1 className="font-semibold text-2xl  md:text-3xl  text-white bg-violet-600 px-3 rounded-sm">
        J
      </h1>
      <h1 className="font-semibold text-xl md:text-2xl  text-violet-600">
        Jobify
      </h1>
    </div>
  );
};

export default Logo;
