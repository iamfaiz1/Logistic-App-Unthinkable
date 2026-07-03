import express from "express";

import {
  getAgentsController,
  getAvailableAgentsController,
  updateAgentLocationController,
} from "../controllers/agent.controller.js";

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
  getAgentsController
);

router.get(
  "/available",
  authenticateUser,
  authorizeRoles("ADMIN"),
  getAvailableAgentsController
);

router.post(
  "/location",
  authenticateUser,
  authorizeRoles("AGENT"),
  updateAgentLocationController
);

export default router;