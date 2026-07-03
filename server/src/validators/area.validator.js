import { z } from "zod";

export const createAreaSchema = z.object({
  name: z.string().min(2).max(100),
  zoneId: z.string().uuid(),
});