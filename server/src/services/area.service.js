import prisma from "../config/prisma.js";

export const createArea = async ({
  name,
  zoneId,
}) => {
  const zone = await prisma.zone.findUnique({
    where: {
      id: zoneId,
    },
  });

  if (!zone) {
    throw new Error("Zone not found");
  }

  return prisma.area.create({
    data: {
      name,
      zoneId,
    },
  });
};

export const getAreas = async () => {
  return prisma.area.findMany({
    include: {
      zone: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};