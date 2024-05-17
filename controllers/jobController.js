import { nanoid } from "nanoid";
import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "./errors/customErrors.js";

export const getAlljobs = async (req, res) => {
  const job = await Job.find({});
  res.status(StatusCodes.OK).json({ job });
};

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (!job) throw new NotFoundError(`no job with id ${id}`);
  res.status(StatusCodes.OK).json({ job });
};

export const editJob = async (req, res) => {
  const { id } = req.params;

  const editedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!editedJob) throw new NotFoundError(`no job with id ${id}`);

  res.status(StatusCodes.OK).json({ job: editedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const deletedJob = await Job.findByIdAndDelete(id);
  if (!deletedJob) throw new NotFoundError(`no job with id ${id}`);

  res.status(StatusCodes.OK).json({ msg: "job deleted !", job: deletedJob });
};
