import prisma from "../config/prisma.js";

import { calculatePrice } from "./pricing.service.js";
import { createTrackingEntry } from "./tracking.service.js";

import { generateTrackingNumber } from "../utils/trackingNumber.js";

export const createOrder = async (
  payload,
  customerId
) => {

  const pricing =
    await calculatePrice(payload);

  const trackingNumber =
    generateTrackingNumber();

  const order =
    await prisma.order.create({
      data: {
        trackingNumber,

        customerId,

        pickupAddress:
          payload.pickupAddress,

        dropAddress:
          payload.dropAddress,

        pickupZoneId:
          payload.pickupZoneId,

        dropZoneId:
          payload.dropZoneId,

        length:
          payload.length,

        width:
          payload.width,

        height:
          payload.height,

        actualWeight:
          payload.actualWeight,

        volumetricWeight:
          pricing.volumetricWeight,

        chargeableWeight:
          pricing.chargeableWeight,

        businessType:
          payload.businessType,

        paymentType:
          payload.paymentType,

        finalCharge:
          pricing.finalCharge,
      },
    });

  await createTrackingEntry({
    orderId: order.id,
    status: "CREATED",
    actorId: customerId,
    actorRole: "CUSTOMER",
  });

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