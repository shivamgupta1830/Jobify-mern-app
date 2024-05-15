import React from "react";
import { Link, useRouteError } from "react-router-dom";
import notFound from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="flex flex-col items-center justify-center px-20 pt-10 w-full text-sm md:text-base lg:text-lg gap-1">
        <img
          src={notFound}
          alt="not-fond-error"
          className=" size-40 md:size-60"
        />
        <h3>Ohh! page not found..</h3>
        <p>We are unable to find the page you are looking for !</p>
        <Link
          to="/dashboard"
          className="text-violet-600 hover:underline font-medium transition-all "
        >
          Back to home
        </Link>
      </div>
    );
  }
  return <div>Error</div>;
};

export default Error;
