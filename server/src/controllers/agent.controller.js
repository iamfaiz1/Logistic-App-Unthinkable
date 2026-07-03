import {
  getAgents,
  getAvailableAgents,
  updateAgentLocation,
} from "../services/agent.service.js";

export const getAgentsController =
  async (req, res, next) => {

    try {

      const agents =
        await getAgents();

      res.json({
        success: true,
        data: agents,
      });

    } catch (error) {
      next(error);
    }
  };

export const getAvailableAgentsController =
  async (req, res, next) => {

    try {

      const agents =
        await getAvailableAgents();

      res.json({
        success: true,
        data: agents,
      });

    } catch (error) {
      next(error);
    }
  };

export const updateAgentLocationController =
  async (req, res, next) => {

    try {

      const location =
        await updateAgentLocation({
          ...req.body,
          agentId:
            req.user.id,
        });

      res.json({
        success: true,
        data: location,
      });

    } catch (error) {
      next(error);
    }
  };