import React from "react";
import { useOutletContext } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return redirect("all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="bg-gray-200 min-h-[100vh] p-8 ">
      <Form
        method="post"
        className=" bg-white rounded-sm  p-6  flex flex-col justify-start items-start gap-10"
      >
        <h3 className="text-2xl font-bold">Add Job</h3>
        <div className="flex justify-start items-center gap-5 flex-wrap">
          <div className=" flex flex-col w-[30%] gap-1">
            <label htmlFor="position" className="text-md">
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-full"
            />
          </div>

          <div className="flex flex-col w-[30%] gap-1">
            <label htmlFor="company" className="text-md">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-full"
            />
          </div>

          <div className="flex flex-col w-[30%] gap-1">
            <label htmlFor="jobLocation" className="text-md">
              Job Location
            </label>
            <input
              type="text"
              name="jobLocation"
              id="jobLocation"
              defaultValue={user.location}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-full"
            />
          </div>

          <div className="flex flex-col w-[30%] gap-1">
            <label htmlFor="jobStatus" className="text-md">
              Job Status
            </label>
            <select
              type="text"
              name="jobStatus"
              id="jobStatus"
              defaultValue={user.location}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-[40%]"
            >
              {Object.values(JOB_STATUS).map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-[30%] gap-1">
            <label htmlFor="jobType" className="text-md">
              Job Type
            </label>
            <select
              type="text"
              name="jobType"
              id="jobType"
              defaultValue={JOB_TYPE.PENDING}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-[40%]"
            >
              {Object.values(JOB_TYPE).map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-violet-600 rounded-sm px-2 py-1 text-white font-medium md:text-base text-sm hover:bg-violet-500 mt-7 transition-all w-[30%]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddJob;
