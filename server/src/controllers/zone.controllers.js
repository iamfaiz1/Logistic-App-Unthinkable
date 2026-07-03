import {
  createZone,
  getAllZones,
} from "../services/zone.service.js";

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