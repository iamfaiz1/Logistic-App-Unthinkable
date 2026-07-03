import express from "express";

import {
  dashboardController,
} from "../controllers/dashboard.controller.js";

import {
  authenticateUser,
} from "../middleware/auth.middleware.js";

import {
  authorizeRoles,
} from "../middleware/rbac.middleware.js";

const router =
  express.Router();

router.get(
  "/",
  authenticateUser,
  authorizeRoles("ADMIN"),
  dashboardController
);

export default router;