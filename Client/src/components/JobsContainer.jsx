import Job from "./Job";
import { useAllJobsContext } from "../pages/AllJobs";

const JobsContainer = () => {
  const { data } = useAllJobsContext();

  const jobs = data.jobs;

  if (jobs.length === 0) {
    return <h3 className="text-2xl font-bold">No jobs to display...</h3>;
  }

  return (
    <div className="flex justify-start items-center flex-wrap gap-9">
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />;
      })}
    </div>
  );
};

export default JobsContainer;
