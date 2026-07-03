import {
  calculatePrice,
} from "../services/pricing.service.js";

export const calculatePriceController =
  async (req, res, next) => {
    try {
      const result =
        await calculatePrice(
          req.body
        );

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };