import Job from "./Job";
import { useAllJobsContext } from "../pages/AllJobs";
// import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const { data } = useAllJobsContext();

  const jobs = data.jobs;
  const totalJobs = data.totalJobs;
  // const numOfPages = data.numOfPages;

  if (jobs.length === 0) {
    return <h3 className="text-2xl font-bold">No jobs to display...</h3>;
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-7">
        {totalJobs} Job{jobs.length > 1 && "s"} found
      </h3>
      <div className="flex flex-row justify-between items-center flex-wrap gap-10">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>

      {/* {numOfPages > 1 && <PageBtnContainer />} */}
    </div>
  );
};

export default JobsContainer;
