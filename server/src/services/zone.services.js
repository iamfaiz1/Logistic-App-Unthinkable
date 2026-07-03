import prisma from "../config/prisma.js";

export const createZone = async (data) => {
  const existingZone = await prisma.zone.findUnique({
    where: {
      name: data.name,
    },
  });

  if (existingZone) {
    throw new Error("Zone already exists");
  }

  return prisma.zone.create({
    data: {
      name: data.name,
    },
  });
};

export const getAllZones = async () => {
  return prisma.zone.findMany({
    include: {
      areas: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};