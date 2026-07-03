import { z } from "zod";

export const pricingSchema =
  z.object({
    length: z.number().positive(),
    width: z.number().positive(),
    height: z.number().positive(),

    actualWeight:
      z.number().positive(),

    businessType: z.enum([
      "B2B",
      "B2C",
    ]),

    paymentType: z.enum([
      "PREPAID",
      "COD",
    ]),

    pickupZoneId:
      z.string().uuid(),

    dropZoneId:
      z.string().uuid(),
  });