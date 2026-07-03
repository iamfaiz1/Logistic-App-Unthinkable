import express from "express";

import {
  createOrderController,
} from "../controllers/order.controller.js";

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
  createOrderSchema,
} from "../validators/order.validator.js";

const router =
  express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeRoles(
    "CUSTOMER",
    "ADMIN"
  ),
  validate(createOrderSchema),
  createOrderController
);

export default router;