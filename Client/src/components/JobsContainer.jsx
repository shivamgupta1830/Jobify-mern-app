import Job from "./Job";
import { useAllJobsContext } from "../pages/AllJobs";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const jobs = data.job;

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>;
  }

  return (
    <div className="flex justify-start items-center flex-wrap gap-10 ">
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />;
      })}
    </div>
  );
};

export default JobsContainer;
