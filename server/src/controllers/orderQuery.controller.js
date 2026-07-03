import {
  getAllOrders,
  getOrderById,
} from "../services/orderQuery.service.js";

export const getOrdersController =
  async (req, res, next) => {

    try {

      const orders =
        await getAllOrders();

      res.json({
        success: true,
        data: orders,
      });

    } catch (error) {
      next(error);
    }
  };

export const getOrderController =
  async (req, res, next) => {

    try {

      const order =
        await getOrderById(
          req.params.id
        );

      res.json({
        success: true,
        data: order,
      });

    } catch (error) {
      next(error);
    }
  };