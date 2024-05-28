import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <div className="font-sans">
      <nav className="py-8 px-24">
        <Logo />
      </nav>
      <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-start md:items-center  px-24 md:gap-5 gap-20">
        <div className=" w-full md:w-[55%] lg:w-[50%] flex flex-col justify-between items-start gap-5 lg:-mt-16  mt-4">
          <h1 className="font-bold text-3xl  md:text-4xl lg:text-5xl">
            Job <span className="text-violet-600">Tracking </span>App
          </h1>
          <p className="w-full lg:w-[75%] font-normal md:text-base text-sm">
            Elevate project management efficiency with our intuitive job
            tracking app. Seamlessly assign tasks, monitor progress, and meet
            deadlines. Streamline communication, enhance collaboration, and
            ensure project success with real-time updates and insights.
          </p>
          <div className="flex xsm:flex-col sm:flex-row sm:justify-center sm:items-start gap-4 text-center">
            <Link
              to="/register"
              className="bg-violet-600 rounded-sm py-2 px-3 text-white font-normal md:text-base text-sm hover:bg-violet-500 transition-all "
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-violet-600 rounded-sm py-2 px-3 text-white font-normal md:text-base text-sm hover:bg-violet-500 transition-all "
            >
              Login / Demo User
            </Link>
          </div>
        </div>

        <div className=" md:w-[50%] lg:w-[40%] w-[55%] md:p-12  -mt-8">
          <img src={main} alt="Jobify_app" className="hover:animate-pulse " />
        </div>
      </div>
    </div>
  );
};

export default Landing;
