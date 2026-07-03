import express from "express";

import {
  assignAgentController,
} from "../controllers/assignment.controller.js";

import {
  authenticateUser,
} from "../middleware/auth.middleware.js";

import {
  authorizeRoles,
} from "../middleware/rbac.middleware.js";

const router =
  express.Router();

router.post(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  assignAgentController
);

export default router;