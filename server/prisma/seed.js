import prisma from "../src/config/prisma.js";
import argon2 from "argon2";

const seed = async () => {

  const exists =
    await prisma.user.findUnique({
      where: {
        email:
          "admin@logistics.com",
      },
    });

  if (exists) {
    console.log(
      "Admin exists"
    );
    return;
  }

  const password =
    await argon2.hash(
      "Admin@123"
    );

  await prisma.user.create({
    data: {
      name: "Super Admin",
      email:
        "admin@logistics.com",
      password,
      role: "ADMIN",
    },
  });

  console.log(
    "Admin created"
  );
};

seed()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));