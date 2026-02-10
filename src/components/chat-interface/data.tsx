// import { dbClient } from "@/app/db";

// type dbmessageType = {
//   id: number;
//   userId: number;
//   username: string;
//   message: string;
//   timestamp: Date;
// };

export type messageType = {
  username: string;
  message: string;
};

export const messages: messageType[] = [
  { username: "abhishek", message: "hello" },
  { username: "user1", message: "hi" },
  { username: "abhishek", message: "how are you?" },
  { username: "user1", message: "i am good, how are you?" },
  { username: "abhishek", message: "i am good too" },
];
// type messageType = {
//   userId: number;
//   username: string;
//   message: string;
//   timestamp: Date;
// };

// export const dbMessage = await dbClient.testmessages.findMany({
//   orderBy: {
//     timestamp: "asc",
//   },
// });

// export const messages: messageType[] = dbMessage.map((msg) => ({
//   userId: msg.userId,
//   username: msg.username,
//   message: msg.message,
//   timestamp: msg.timestamp,
// }));
