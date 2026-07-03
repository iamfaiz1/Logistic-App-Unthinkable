import prisma from "../config/prisma.js";

import {
  createTrackingEntry,
} from "./tracking.service.js";

export const markFailedDelivery =
  async ({
    orderId,
    reason,
    actorId,
    actorRole,
  }) => {

    const order =
      await prisma.order.findUnique({
        where: { id: orderId },
      });

    if (!order) {
      throw new Error(
        "Order not found"
      );
    }

    const count =
      await prisma.deliveryAttempt.count({
        where: {
          orderId,
        },
      });

    await prisma.deliveryAttempt.create({
      data: {
        orderId,
        attemptNumber:
          count + 1,
        scheduledDate:
          new Date(),
        reason,
        status: "FAILED",
      },
    });

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: "FAILED",
      },
    });

    await createTrackingEntry({
      orderId,
      status: "FAILED",
      actorId,
      actorRole,
    });

    return true;
  };

export const rescheduleDelivery =
  async ({
    orderId,
    scheduledDate,
  }) => {

    const count =
      await prisma.deliveryAttempt.count({
        where: {
          orderId,
        },
      });

    return prisma.deliveryAttempt.create({
      data: {
        orderId,
        attemptNumber:
          count + 1,
        scheduledDate:
          new Date(
            scheduledDate
          ),
        status: "CREATED",
      },
    });
};