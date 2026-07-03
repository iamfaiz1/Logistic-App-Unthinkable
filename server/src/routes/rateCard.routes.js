import express from "express";

import {
  createRateCardController,
  getRateCardsController,
} from "../controllers/rateCard.controller.js";

import {
  authenticateUser,
} from "../middleware/auth.middleware.js";

import {
  authorizeRoles,
} from "../middleware/rbac.middleware.js";

import { validate }
from "../middleware/validate.middleware.js";

import {
  createRateCardSchema,
} from "../validators/rateCard.validator.js";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeRoles("ADMIN"),
  validate(
    createRateCardSchema
  ),
  createRateCardController
);

router.get(
  "/",
  authenticateUser,
  getRateCardsController
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  updateRateCardController
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  deleteRateCardController
);

export default router;