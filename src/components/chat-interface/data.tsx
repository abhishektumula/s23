import { dbClient } from "@/app/db";

type dbmessageType = {
  id: number;
  userId: number;
  username: string;
  message: string;
  timestamp: Date;
};

type messageType = {
  userId: number;
  username: string;
  message: string;
  timestamp: Date;
};

export const dbMessage = await dbClient.testmessages.findMany({
  orderBy: {
    timestamp: "asc",
  },
});

export const messages: messageType[] = dbMessage.map((msg) => ({
  userId: msg.userId,
  username: msg.username,
  message: msg.message,
  timestamp: msg.timestamp,
}));
