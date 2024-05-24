import { toast } from "react-toastify";
import JobsContainer from "../components/JobsContainer";
import SearchContainer from "../components/SearchContainer";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/jobs");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const AllJobsContext = createContext();
const AllJobs = () => {
  const { data } = useLoaderData();

  return (
    <div className="p-8 h-[100vh]">
      <AllJobsContext.Provider value={{ data }}>
        <SearchContainer />
        <JobsContainer />
      </AllJobsContext.Provider>
    </div>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
