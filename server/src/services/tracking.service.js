import prisma from "../config/prisma.js";

export const createTrackingEntry = async ({
  orderId,
  status,
  actorId,
  actorRole,
}) => {
  return prisma.trackingHistory.create({
    data: {
      orderId,
      status,
      actorId,
      actorRole,
    },
  });
};


export const updateOrderStatus =
  async ({
    orderId,
    status,
    actorId,
    actorRole,
  }) => {

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status,
      },
    });

    return prisma.trackingHistory.create({
      data: {
        orderId,
        status,
        actorId,
        actorRole,
      },
    });
};