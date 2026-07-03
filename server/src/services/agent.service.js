import prisma from "../config/prisma.js";

export const getAgents =
  async () => {

    return prisma.user.findMany({
      where: {
        role: "AGENT",
      },
      include: {
        location: true,
      },
    });
};

export const getAvailableAgents =
  async () => {

    return prisma.user.findMany({
      where: {
        role: "AGENT",
        isAvailable: true,
      },
      include: {
        location: true,
      },
    });
};

export const updateAgentLocation =
  async ({
    agentId,
    zoneId,
    latitude,
    longitude,
  }) => {

    return prisma.agentLocation.upsert({
      where: {
        agentId,
      },

      update: {
        zoneId,
        latitude,
        longitude,
      },

      create: {
        agentId,
        zoneId,
        latitude,
        longitude,
      },
    });
};