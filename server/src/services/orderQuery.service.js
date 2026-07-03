import prisma from "../config/prisma.js";

export const getAllOrders =
  async () => {

    return prisma.order.findMany({
      include: {
        customer: true,
        assignedAgent: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
};

export const getOrderById =
  async (id) => {

    return prisma.order.findUnique({
      where: { id },

      include: {
        customer: true,
        assignedAgent: true,
        trackingHistory: true,
      },
    });
};