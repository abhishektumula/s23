"use client";
import { messages } from "./data";
import { useEffect, useState } from "react";

export const Bubble = ({
  username,
  message,
  adminUser,
}: {
  username: string;
  message: string;
  adminUser: string | null | undefined;
}) => {
  return (
    <div
      className={`p-2 w-full flex flex-col items-center ${username === adminUser ? "items-end" : "items-start"}`}
    >
      <div
        className={`${username === adminUser ? "bg-green-800" : "bg-blue-800"} p-2 rounded-md`}
      >
        {message}
      </div>
    </div>
  );
};

export const ChatBubbles = ({
  adminUser,
}: {
  adminUser: string | null | undefined;
}) => {
  const [chatMessages, setChatMessages] = useState(messages);

  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);

  return (
    <div className="flex flex-col justify-start items-start px-2 py-4 w-full gap-2">
      <div className="h-20 bg-transparent w-full"></div>
      {chatMessages.map((each, idx) => (
        <div className="w-full" key={idx}>
          <Bubble
            username={each.username}
            message={each.message}
            adminUser={adminUser}
          />
        </div>
      ))}
    </div>
  );
};
