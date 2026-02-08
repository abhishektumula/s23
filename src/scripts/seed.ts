import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { messages } from "@/components/chat-interface/data";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString: connectionString,
});

export const dbClient = new PrismaClient({ adapter });

// export const seeding = async () => {
//   await dbClient.userAuth.create({
//     data: {
//       username: "user1",
//       password: "password1",
//       secureKey: "123456",
//     },
//   });
// };

export const seedMessages = async () => {
  for (let i = 0; i < messages.length; i++) {
    const messagef = messages[i];
    await dbClient.testmessages.create({
      data: {
        userId: messagef.userId,
        username: messagef.username,
        message: messagef.message,
        timestamp: messagef.timestamp,
      },
    });
  }
};

seedMessages()
  .catch((e) => console.log(e))
  .finally(async () => {
    await dbClient.$disconnect();
  });
