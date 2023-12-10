import React, { createContext, useEffect, useState } from "react";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const [messageHistory, setMessageHistory] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket("ws://45.83.122.124:8000/");

    newSocket.onopen = () => {
      console.log("WebSocket connected");
      newSocket.send(JSON.stringify({ type: "message-history" }));
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);

      switch (data.type) {
        case "messageHistory":
          setMessageHistory(data.payload.messageHistory);
          break;
        default:
          break;
      }
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    newSocket.onerror = (error) => {
      console.log("WebSocket error: " + error);
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [messageHistory]);

  const contextValue = {
    socket,
    messageHistory,
  };

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
