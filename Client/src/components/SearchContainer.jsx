import React from "react";

import { Form, useSubmit, Link } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();

  return (
    <div>
      <Form className="bg-white rounded-sm  gap-4 p-8  flex flex-col justify-start  items-start capitalize">
        <h3 className="text-2xl font-bold">Search</h3>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center  gap-4 md:gap-5 flex-wrap w-full">
          <div className=" flex flex-col  w-[90%] md:w-[30%] gap-1 ">
            <label htmlFor="search">Search</label>
            <input
              type="search"
              id="search"
              name="search"
              defaultValue={search}
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal"
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />
          </div>

          <div className="flex flex-col  w-[90%] md:w-[30%] gap-1 ">
            <label htmlFor="jobStatus" className="text-md">
              Job Status
            </label>
            <select
              type="text"
              name="jobStatus"
              id="jobStatus"
              defaultValue={jobStatus}
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-full"
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            >
              {["all", ...Object.values(JOB_STATUS)].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col  w-[90%] md:w-[30%] gap-1">
            <label htmlFor="jobType" className="text-md">
              Job Type
            </label>
            <select
              type="text"
              name="jobType"
              id="jobType"
              defaultValue={jobType}
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-full"
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            >
              {["all", ...Object.values(JOB_TYPE)].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  justify-start items-start gap-2  w-[90%] md:w-[30%]">
            <label htmlFor="sort" className="text-md">
              Sort
            </label>
            <select
              type="text"
              name="sort"
              id="sort"
              defaultValue={sort}
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md w-full"
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            >
              {[...Object.values(JOB_SORT_BY)].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>
          <Link
            to="/dashboard/all-jobs"
            className="bg-violet-600 rounded-sm px-2 py-1 text-white font-medium md:text-base text-sm hover:bg-violet-500 mt-7 transition-all  w-[90%] md:w-[30%] text-center"
          >
            Reset
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SearchContainer;
