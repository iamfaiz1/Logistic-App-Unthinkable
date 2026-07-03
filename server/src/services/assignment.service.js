import prisma from "../config/prisma.js";
import { createTrackingEntry, } from "./tracking.service.js";

export const assignAgentToOrder =
    async (orderId) => {

        const order =
            await prisma.order.findUnique({
                where: {
                    id: orderId,
                },
            });

        if (!order) {
            throw new Error(
                "Order not found"
            );
        }

        const agents =
            await prisma.user.findMany({
                where: {
                    role: "AGENT",
                    isAvailable: true,
                },
                include: {
                    location: true,
                },
            });

        if (!agents.length) {
            throw new Error(
                "No available agents"
            );
        }

        const assignedAgent =
            agents[0];

        await prisma.order.update({
            where: {
                id: orderId,
            },
            data: {
                assignedAgentId:
                    assignedAgent.id,
            },
        });

        await prisma.user.update({
            where: {
                id: assignedAgent.id,
            },
            data: {
                isAvailable: false,
            },
        });

        await createTrackingEntry({
            orderId: order.id,
            status: "CREATED",
            actorId: assignedAgent.id,
            actorRole: "AGENT",
        });

        return assignedAgent;
    };