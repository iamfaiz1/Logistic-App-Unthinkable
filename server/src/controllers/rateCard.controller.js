import {
  createRateCard,
  getRateCards,
} from "../services/rateCard.service.js";

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