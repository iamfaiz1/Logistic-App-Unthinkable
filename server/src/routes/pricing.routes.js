import express from "express";

import {
  calculatePriceController,
} from "../controllers/pricing.controller.js";

import {
  authenticateUser,
} from "../middleware/auth.middleware.js";

import {
  validate,
} from "../middleware/validate.middleware.js";

import {
  pricingSchema,
} from "../validators/pricing.validator.js";

const router =
  express.Router();

router.post(
  "/calculate",
  authenticateUser,
  validate(pricingSchema),
  calculatePriceController
);

export default router;