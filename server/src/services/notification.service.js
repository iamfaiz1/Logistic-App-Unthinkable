import prisma from "../config/prisma.js";

export const createNotification =
  async ({
    orderId,
    channel,
    message,
  }) => {

    return prisma.notificationLog.create({
      data: {
        orderId,
        channel,
        message,
      },
    });
};