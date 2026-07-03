import express from "express";
import {
  createAreaController,
  getAreasController,
} from "../controllers/area.controller.js";

import {
  authenticateUser,
} from "../middleware/auth.middleware.js";

import {
  authorizeRoles,
} from "../middleware/rbac.middleware.js";

import { validate }
from "../middleware/validate.middleware.js";

import {
  createAreaSchema,
} from "../validators/area.validator.js";

const router = express.Router();





router.post(
  "/",
  authenticateUser,
  authorizeRoles("ADMIN"),
  validate(createAreaSchema),
  createAreaController
);

router.get(
  "/",
  authenticateUser,
  getAreasController
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  updateAreaController
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  deleteAreaController
);

export default router;