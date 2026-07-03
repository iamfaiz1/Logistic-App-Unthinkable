import prisma from "../config/prisma.js";

export const getDashboardStats =
  async () => {

    const totalOrders =
      await prisma.order.count();

    const deliveredOrders =
      await prisma.order.count({
        where: {
          status: "DELIVERED",
        },
      });

    const failedOrders =
      await prisma.order.count({
        where: {
          status: "FAILED",
        },
      });

    const activeAgents =
      await prisma.user.count({
        where: {
          role: "AGENT",
          isAvailable: false,
        },
      });

    const availableAgents =
      await prisma.user.count({
        where: {
          role: "AGENT",
          isAvailable: true,
        },
      });

    return {
      totalOrders,
      deliveredOrders,
      failedOrders,
      activeAgents,
      availableAgents,
    };
};