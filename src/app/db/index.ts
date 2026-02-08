import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString: connectionString,
});

export const dbClient = new PrismaClient({ adapter });

export const seeding = async () => {
  await dbClient.userAuth.create({
    data: {
      username: "user1",
      password: "password1",
      secureKey: "123456",
    },
  });
};
