import {
  getDashboardStats,
} from "../services/dashboard.service.js";

export const dashboardController =
  async (req, res, next) => {

    try {

      const stats =
        await getDashboardStats();

      res.json({
        success: true,
        data: stats,
      });

    } catch (error) {
      next(error);
    }
  };
