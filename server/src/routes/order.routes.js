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

import {
  getOrdersController,
  getOrderController,
} from "../controllers/orderQuery.controller.js";

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

router.get(
  "/",
  authenticateUser,
  getOrdersController
);

router.get(
  "/:id",
  authenticateUser,
  getOrderController
);

export default router;