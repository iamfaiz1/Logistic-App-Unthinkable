import { z } from "zod";

export const createZoneSchema = z.object({
  name: z.string().min(2).max(100),
});