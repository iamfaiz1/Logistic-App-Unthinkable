import {
  createZone,
  getAllZones,
  updateZone,
  deleteZone,
} from "../services/zone.service.js";

export const updateZoneController =
  async (req, res, next) => {

    try {

      const zone =
        await updateZone(
          req.params.id,
          req.body
        );

      res.json({
        success: true,
        data: zone,
      });

    } catch (error) {
      next(error);
    }
  };

export const deleteZoneController =
  async (req, res, next) => {

    try {

      await deleteZone(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Zone deleted",
      });

    } catch (error) {
      next(error);
    }
  };


export const createZoneController =
  async (req, res, next) => {
    try {
      const zone = await createZone(
        req.body
      );

      res.status(201).json({
        success: true,
        data: zone,
      });
    } catch (error) {
      next(error);
    }
  };

export const getZonesController =
  async (req, res, next) => {
    try {
      const zones =
        await getAllZones();

      res.json({
        success: true,
        data: zones,
      });
    } catch (error) {
      next(error);
    }
  };
