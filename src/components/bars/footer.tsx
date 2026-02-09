"use client";
import { IconPaperclip } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRef } from "react";

export const Footer = ({
  adminUser,
}: {
  adminUser: string | null | undefined;
}) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      console.log("Received message:", event.data);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  const handeleSendMessage = () => {
    if (socketRef.current) {
      const msg = JSON.stringify({
        sender: adminUser,
        message: currentMessage,
      });
      socketRef.current.send(msg);
      setCurrentMessage("");
    }
  };
  return (
    <div className="w-full max-w-2xl mx-auto fixed bottom-0 mb-4 px-4">
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
              placeholder="Enter message here"
              className="w-full resize-none p-2 border border-neutral-500 rounded-md"
              onChange={(e) => setCurrentMessage(e.target.value)}
            ></textarea>
            <div className="border border-neutral-500 rounded-full flex items-center justify-center p-2">
              <button onClick={handeleSendMessage}>
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
