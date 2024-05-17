import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobStatus: {
      type: String,
      enum: ["full-time", "pat-time", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },

  { timestamps: true }
);
export default mongoose.model("Job", JobSchema);
