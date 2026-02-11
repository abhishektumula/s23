"use client";
import { use, useEffect, useState } from "react";
import { ChatBubbles } from "../chat-interface";
import { Footer } from "./footer";

export type messageType = {
  username: string;
  message: string;
};

export const CommonBar = ({
  adminUser,
}: {
  adminUser: string | null | undefined;
}) => {
  const [context, setContext] = useState<messageType[]>([
    { username: "abhishek", message: "hello" },
    { username: "user1", message: "hi" },
    { username: "abhishek", message: "how are you?" },
    { username: "user1", message: "i am good, how are you?" },
    { username: "abhishek", message: "i am good too" },
  ]);
  return (
    <div>
      <ChatBubbles adminUser={adminUser} context={context} />
      <Footer adminUser={adminUser} context={context} />
    </div>
  );
};
