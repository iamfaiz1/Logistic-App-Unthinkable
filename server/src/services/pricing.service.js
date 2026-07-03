import prisma from "../config/prisma.js";

export const calculatePrice = async ({
  length,
  width,
  height,
  actualWeight,
  businessType,
  paymentType,
  pickupZoneId,
  dropZoneId,
}) => {

  const volumetricWeight =
    (length * width * height) / 5000;

  const chargeableWeight =
    Math.max(
      actualWeight,
      volumetricWeight
    );

  const zoneType =
    pickupZoneId === dropZoneId
      ? "INTRA"
      : "INTER";

  const rateCard =
    await prisma.rateCard.findUnique({
      where: {
        businessType_zoneType: {
          businessType,
          zoneType,
        },
      },
    });

  if (!rateCard) {
    throw new Error(
      "Rate card not found"
    );
  }

  const baseCharge =
    chargeableWeight *
    rateCard.ratePerKg;

  const codCharge =
    paymentType === "COD"
      ? rateCard.codSurcharge
      : 0;

  const finalCharge =
    baseCharge + codCharge;

  return {
    volumetricWeight,
    chargeableWeight,
    zoneType,
    baseCharge,
    codCharge,
    finalCharge,
  };
};