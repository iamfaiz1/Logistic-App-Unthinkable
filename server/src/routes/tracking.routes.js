import express from "express";

import {
  updateStatusController,
  getTrackingController,
} from "../controllers/tracking.controller.js";

import {
  authenticateUser,
} from "../middleware/auth.middleware.js";

import {
  authorizeRoles,
} from "../middleware/rbac.middleware.js";

import {
  validate,
} from "../middleware/validate.middleware.js";

import {
  updateStatusSchema,
} from "../validators/tracking.validator.js";

const router =
  express.Router();

router.patch(
  "/:id/status",
  authenticateUser,
  authorizeRoles("AGENT"),
  validate(updateStatusSchema),
  updateStatusController
);

router.get(
  "/:id",
  authenticateUser,
  getTrackingController
);

export default router;