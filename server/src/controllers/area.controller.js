import {
  createArea,
  getAreas,
} from "../services/area.service.js";

export const createAreaController =
  async (req, res, next) => {
    try {
      const area = await createArea(
        req.body
      );

      res.status(201).json({
        success: true,
        data: area,
      });
    } catch (error) {
      next(error);
    }
  };

export const getAreasController =
  async (req, res, next) => {
    try {
      const areas = await getAreas();

      res.json({
        success: true,
        data: areas,
      });
    } catch (error) {
      next(error);
    }
  };