import {
  updateArea,
  deleteArea,
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



export const updateAreaController =
  async (req, res, next) => {

    try {

      const area =
        await updateArea(
          req.params.id,
          req.body
        );

      res.json({
        success: true,
        data: area,
      });

    } catch (error) {
      next(error);
    }
  };

export const deleteAreaController =
  async (req, res, next) => {

    try {

      await deleteArea(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Area deleted",
      });

    } catch (error) {
      next(error);
    }
  };