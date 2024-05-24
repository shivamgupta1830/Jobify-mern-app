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
    <div className="bg-gray-200 h-[100vh] text-center">
      <Form
        method="post"
        className=" w-[90%] m-auto mt-8 flex flex-col justify-between items-start p-8 gap-6 bg-white "
      >
        <h3 className="text-2xl font-bold">Add Job</h3>
        <div className="flex justify-between items-center gap-10 w-full">
          <div className="w-full flex flex-col  justify-start items-start gap-2">
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
          <div className="w-full flex flex-col  justify-start items-start gap-2">
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
          <div className="w-full flex flex-col  justify-start items-start gap-2">
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
        </div>
        <div className="flex justify-between items-center gap-10 w-full">
          <div className="w-full flex flex-col  justify-start items-start gap-2">
            <label htmlFor="jobStatus" className="text-md">
              Job Status
            </label>
            <select
              type="text"
              name="jobStatus"
              id="jobStatus"
              defaultValue={user.location}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-full"
            >
              {Object.values(JOB_STATUS).map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col  justify-start items-start gap-2">
            <label htmlFor="jobType" className="text-md">
              Job Type
            </label>
            <select
              type="text"
              name="jobType"
              id="jobType"
              defaultValue={JOB_TYPE.PENDING}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal text-md  w-full"
            >
              {Object.values(JOB_TYPE).map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-violet-600 rounded-sm px-2 py-1 text-white font-medium md:text-base text-sm hover:bg-violet-500 transition-all w-full mt-8"
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
