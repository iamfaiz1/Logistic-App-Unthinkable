import express from "express";
import { validate } from "../middleware/validate.middleware.js";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import {
  register,
  login,
  me,
} from "../controllers/auth.controller.js";


const router = express.Router();

router.get(
  "/me",
  authenticateUser,
  me
);

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

export default router;