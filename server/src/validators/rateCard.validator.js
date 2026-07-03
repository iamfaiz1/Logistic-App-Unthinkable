import { z } from "zod";

export const createRateCardSchema = z.object({
  businessType: z.enum([
    "B2B",
    "B2C",
  ]),

  zoneType: z.enum([
    "INTRA",
    "INTER",
  ]),

  ratePerKg: z.number().positive(),

  codSurcharge: z.number().min(0),
});