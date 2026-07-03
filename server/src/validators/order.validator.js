import { z } from "zod";

export const createOrderSchema = z.object({
  pickupAddress: z.string().min(5),
  dropAddress: z.string().min(5),

  pickupZoneId: z.string().uuid(),
  dropZoneId: z.string().uuid(),

  length: z.number().positive(),
  width: z.number().positive(),
  height: z.number().positive(),

  actualWeight: z.number().positive(),

  businessType: z.enum(["B2B", "B2C"]),
  paymentType: z.enum(["PREPAID", "COD"]),
});

