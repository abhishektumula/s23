"use client";
import { IconPaperclip } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { messageType } from "./common-bar";

export const Footer = ({
  adminUser,
  context,
}: {
  adminUser: string | null | undefined;
  context: messageType[];
}) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const socketRef = useRef<WebSocket | null>(null);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("connected to web socket server");
    };

    socket.onmessage = (event) => {
      console.log("received", event.data);
    };

    socket.onclose = () => {
      console.log("disconnected from web socket server");
    };
  }, []);

  const hadleSendMessage = () => {
    if (!socketRef.current || currentMessage.trim() === "") return;

    const payload: messageType = {
      username: adminUser ? adminUser : "unknown",
      message: currentMessage,
    };

    socketRef.current.send(JSON.stringify(payload));
    setCurrentMessage("");
  };
  return (
    <div className="w-full max-w-2xl mx-auto fixed bottom-0 mb-4 px-4 boder border-neutral-50">
      <div className="w-full h-16 flex flex-rows justify-start items-center p-2 border border-neutral-500 gap-2 rounded-md">
        <div className="border border-neutral-500 rounded-full p-2 flex items-center justify-center">
          <IconPaperclip size={16} />
        </div>
        <div className="flex-1 p-2 w-full rounded-md">
          <div className="flex flex-row gap-4 w-full items-center justify-center">
            {/* <div className="flex flex-1 w-full border border-neutral-500 rounded-md"> */}
            <textarea
              name=""
              id=""
              rows={1}
              placeholder="Enter message..."
              className="w-full resize-none p-2 border border-neutral-500 rounded-md"
              onChange={(e) => setCurrentMessage(e.target.value)}
            ></textarea>
            <div className="border border-neutral-500 rounded-full flex items-center justify-center p-2">
              <button
                className="w-full"
                onClick={() => {
                  socketRef.current?.send(currentMessage);
                  context.push({
                    username: adminUser ? adminUser : "unknown",
                    message: currentMessage,
                  });
                  console.log("message sent");
                  console.log(context);
                }}
              >
                <IconUpload size={16} />
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
