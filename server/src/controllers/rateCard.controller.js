import {
  createRateCard,
  getRateCards,
  updateRateCard,
  deleteRateCard,
} from "../services/rateCard.service.js";



export const updateRateCardController =
  async (req, res, next) => {
    try {
      const card =
        await updateRateCard(
          req.params.id,
          req.body
        );

      res.json({
        success: true,
        data: card,
      });

    } catch (error) {
      next(error);
    }
  };

export const deleteRateCardController =
  async (req, res, next) => {
    try {
      await deleteRateCard(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Rate card deleted",
      });

    } catch (error) {
      next(error);
    }
  };


export const createRateCardController =
  async (req, res, next) => {
    try {
      const card =
        await createRateCard(
          req.body
        );

      res.status(201).json({
        success: true,
        data: card,
      });
    } catch (error) {
      next(error);
    }
  };

export const getRateCardsController =
  async (req, res, next) => {
    try {
      const cards =
        await getRateCards();

      res.json({
        success: true,
        data: cards,
      });
    } catch (error) {
      next(error);
    }
  };