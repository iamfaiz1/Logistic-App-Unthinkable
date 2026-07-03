import {
  assignAgentToOrder,
} from "../services/assignment.service.js";

export const assignAgentController =
  async (req, res, next) => {
    try {

      const agent =
        await assignAgentToOrder(
          req.params.id
        );

      res.json({
        success: true,
        message:
          "Agent assigned successfully",
        data: agent,
      });

    } catch (error) {
      next(error);
    }
  };