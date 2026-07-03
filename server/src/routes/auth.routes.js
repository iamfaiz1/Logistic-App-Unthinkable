import { authenticateUser }
from "../middleware/auth.middleware.js";

import { register, login, me }
from "../controllers/auth.controller.js";

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/me", authenticateUser, me);

// test route
router.get( "/admin-test", authenticateUser, authorizeRoles("ADMIN"),
  (req, res) => {
    res.json({
      message: "Admin access granted",
    });
  }
);