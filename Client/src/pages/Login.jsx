import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="  flex flex-col justify-between items-center m-auto mt-5  shadow-md border-t-4 border-violet-600 rounded-sm w-[80%] md:w-[60%] lg:w-[30%] p-4 gap-3 text-sm font-medium">
        <div className=" w-full flex flex-col justify-center items-center gap-2 mb-2">
          <Logo />
          <h3>Login</h3>
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="shivam123@gmail.com"
            required
            className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue="secret123"
            required
            className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
          />
        </div>

        <button
          type="submit"
          className="bg-violet-600 rounded-sm py-2 px-3 text-white font-medium md:text-base text-sm hover:bg-violet-500 w-full mt-5 transition-all "
        >
          Login
        </button>

        <button
          type="button"
          className="bg-violet-600 rounded-sm py-2 px-3 text-white font-medium md:text-base text-sm hover:bg-violet-500 w-full mt-3 transition-all "
        >
          Explore App
        </button>
        <p>
          Not registerd yet?{" "}
          <Link
            to="/register"
            className="text-violet-600 hover:underline transition-all "
          >
            Register
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
