import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";

import JobInfo from "./JobInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");

  const bgColor = () => {
    if (jobStatus === "pending")
      return `bg-orange-300 text-orange-900 rounded-sm w-[75%] px-2 text-center`;
    if (jobStatus === "interview")
      return `bg-green-300 text-green-900  rounded-sm w-[75%] px-2 text-center`;
    if (jobStatus === "declined")
      return `bg-red-300 text-red-900  rounded-sm w-[75%] px-2 text-center`;
  };

  return (
    <div className="bg-white w-[30%] p-4 rounded-sm capitalize hover:scale-105 transition-all shadow-md">
      <header className="flex justify-start gap-4 items-center px-1 mb-4  pb-2 border-b border-b-black">
        <div className="bg-violet-600 rounded-sm w-12  text-center px-2 py-3 text-white font-bold font-5xl">
          {company.charAt(0).toUpperCase()}
        </div>

        <div>
          <h5 className="text-lg font-semibold">{position}</h5>
          <p className="text-sm font-normal">{company}</p>
        </div>
      </header>
      <div>
        <div className="grid grid-cols-2  gap-4 mb-4 text-sm">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />

          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={bgColor()}>{jobStatus}</div>
        </div>

        <footer className=" flex justify-start items-center gap-5 ">
          <Link
            to={`/dashboard/edit-job/${_id}`}
            className="flex justify-between items-center gap-1 text-white bg-violet-600 hover:bg-violet-500 py-1 px-2 rounded-sm text-sm"
          >
            Edit
          </Link>
          <Form method="post" action={`/dashboard/delete-job/${_id}`}>
            <button
              type="submit"
              className="flex justify-between items-center gap-1 text-white bg-violet-600 hover:bg-violet-500 py-1 px-2 rounded-sm text-sm"
            >
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </div>
  );
};

export default Job;
