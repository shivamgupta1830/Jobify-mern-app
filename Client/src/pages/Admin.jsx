import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

import { toast } from "react-toastify";
import StatItem from "../components/StatsItems";
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
    <div className="bg-gray-100 h-[100vh] flex justify-start items-start gap-8 p-8 ">
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
        color={"text-orange-900"}
        bgc={"bg-orange-300"}
        border={"border-orange-900"}
      />
    </div>
  );
};
export default Admin;
