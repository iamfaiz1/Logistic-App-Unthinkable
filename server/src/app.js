import express from "express";
import cors from "cors";

import { errorHandler } from "./middleware/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";
import zoneRoutes from "./routes/zone.routes.js";
import areaRoutes from "./routes/area.routes.js";
import rateCardRoutes from "./routes/rateCard.routes.js";
import pricingRoutes from "./routes/pricing.routes.js";
import orderRoutes from "./routes/order.routes.js"; 
import assignmentRoutes from "./routes/assignment.routes.js";
import trackingRoutes from "./routes/tracking.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import agentRoutes from "./routes/agent.routes.js";



const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/zones", zoneRoutes);
app.use("/api/areas", areaRoutes);
app.use("/api/rate-cards", rateCardRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/assign-agents", assignmentRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/agents", agentRoutes);

// error handler
app.use(errorHandler);


export default app;