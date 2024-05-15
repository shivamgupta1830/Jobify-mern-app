import { Router } from "express";

const router = Router();

import {
  getAlljobs,
  getSingleJob,
  createJob,
  editJob,
  deleteJob,
} from "../controllers/jobController.js";

router.route("/").get(getAlljobs).post(createJob);
router.route("/:id").get(getSingleJob).patch(editJob).delete(deleteJob);

export default router;
