import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

import { toast } from "react-toastify";
import StatItem from "../components/StatsItem";
export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <div className="bg-gray-200 h-[100vh] flex justify-center items-start gap-8 p-8 ">
      <StatItem
        count={users}
        icon={<FaSuitcaseRolling />}
        title={"current users"}
        color={"text-green-900"}
        bgc={"bg-green-300"}
        border={"border-green-900"}
      />
      <StatItem
        count={jobs}
        icon={<FaCalendarCheck />}
        title={"total jobs"}
        color={"text-blue-900"}
        bgc={"bg-blue-300"}
        border={"border-blue-900"}
      />
    </div>
  );
};
export default Admin;
