import {
  updateOrderStatus,
  getTrackingTimeline,
} from "../services/tracking.service.js";

export const updateStatusController =
  async (req, res, next) => {

    try {

      const order =
        await updateOrderStatus({
          orderId: req.params.id,
          status: req.body.status,
          actorId: req.user.id,
          actorRole: req.user.role,
        });

      res.json({
        success: true,
        data: order,
      });

    } catch (error) {
      next(error);
    }
  };

export const getTrackingController =
  async (req, res, next) => {
    try {
      const timeline =
        await getTrackingTimeline(
          req.params.id
        );

      res.json({
        success: true,
        data: timeline,
      });

    } catch (error) {
      next(error);
    }
  };
