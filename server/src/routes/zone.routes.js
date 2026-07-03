import express from "express";
import {
  createZoneController,
  getZonesController,
} from "../controllers/zone.controllers.js";

import { validate }
from "../middleware/validate.middleware.js";

import {
  authenticateUser,
} from "../middleware/auth.middleware.js";

import {
  authorizeRoles,
} from "../middleware/rbac.middleware.js";

import {
  createZoneSchema,
} from "../validators/zone.validator.js";


const router = express.Router();


router.patch(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  updateZoneController
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  deleteZoneController
);

router.post(
  "/",
  authenticateUser,
  authorizeRoles("ADMIN"),
  validate(createZoneSchema),
  createZoneController
);

router.get(
  "/",
  authenticateUser,
  getZonesController
);

export default router;