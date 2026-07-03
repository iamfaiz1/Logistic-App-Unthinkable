import prisma from "../config/prisma.js";

export const createRateCard = async (
  data
) => {

  const existing =
    await prisma.rateCard.findFirst({
      where: {
        businessType:
          data.businessType,

        zoneType:
          data.zoneType,
      },
    });

  if (existing) {
    throw new Error(
      "Rate card already exists"
    );
  }

  return prisma.rateCard.create({
    data,
  });
};

export const getRateCards =
  async () => {
    return prisma.rateCard.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
};

export const updateRateCard =
  async (id, data) => {

    return prisma.rateCard.update({
      where: { id },
      data,
    });
};

export const deleteRateCard =
  async (id) => {

    return prisma.rateCard.delete({
      where: { id },
    });
};