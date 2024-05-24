import React from "react";

const JobInfo = ({ icon, text }) => {
  return (
    <div className="text-sm flex justify-start items-center gap-2">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default JobInfo;
