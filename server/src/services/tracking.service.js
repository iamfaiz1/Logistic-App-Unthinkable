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

    const order =
      await prisma.order.update({
        where: {
          id: orderId,
        },
        data: {
          status,
        },
      });

    await createTrackingEntry({
      orderId,
      status,
      actorId,
      actorRole,
    });

    if (
      status === "DELIVERED" ||
      status === "FAILED"
    ) {
      if (order.assignedAgentId) {
        await prisma.user.update({
          where: {
            id: order.assignedAgentId,
          },
          data: {
            isAvailable: true,
          },
        });
      }
    }

    return order;
  };

export const getTrackingTimeline =
  async (orderId) => {

    return prisma.trackingHistory.findMany({
      where: {
        orderId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
};