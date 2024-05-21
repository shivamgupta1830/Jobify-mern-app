import { Router } from "express";

const router = Router();

import {
  getAlljobs,
  getSingleJob,
  createJob,
  editJob,
  deleteJob,
} from "../controllers/jobController.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

router.route("/").get(getAlljobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(getSingleJob)
  .patch(validateJobInput, editJob)
  .delete(deleteJob);

export default router;
