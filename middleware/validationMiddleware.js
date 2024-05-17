import { body, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

const withValidationErrors = (validateValues) => {
  return [validateValues];
};
