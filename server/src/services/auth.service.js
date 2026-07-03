import argon2 from "argon2";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";

const toSafeUser = ({
    password,
    ...user
}) => user;

export const registerUser = async ({
    name,
    email,
    password,
}) => {
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await argon2.hash(password);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const token = generateToken(user);
    return { user: toSafeUser(user), token };
};

export const loginUser = async ({
    email,
    password,
}) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const valid = await argon2.verify(
        user.password,
        password
    );

    if (!valid) {
        throw new Error("Invalid credentials");
    }

    const token = generateToken(user);
    return { user: toSafeUser(user), token };
};
