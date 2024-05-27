import { toast } from "react-toastify";
import JobsContainer from "../components/JobsContainer";
import SearchContainer from "../components/SearchContainer";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/jobs", {
      params,
    });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};
const AllJobsContext = createContext();
const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <div className="p-8 min-h-[100vh] flex flex-col justify-start gap-8">
      <AllJobsContext.Provider value={{ data, searchValues }}>
        <SearchContainer />
        <JobsContainer />
      </AllJobsContext.Provider>
    </div>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
