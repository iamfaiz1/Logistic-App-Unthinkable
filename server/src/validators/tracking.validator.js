import { z } from "zod";

export const updateStatusSchema =
  z.object({
    status: z.enum([
      "PICKED_UP",
      "IN_TRANSIT",
      "OUT_FOR_DELIVERY",
      "DELIVERED",
      "FAILED",
    ]),
  });