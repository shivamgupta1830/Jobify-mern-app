import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";

export const getAlljobs = async (req, res) => {
  const job = await Job.find({});
  res.status(StatusCodes.OK).json({ job });
};

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const editJob = async (req, res) => {
  const editedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ job: editedJob });
};

export const deleteJob = async (req, res) => {
  const deletedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "job deleted !", job: deletedJob });
};
