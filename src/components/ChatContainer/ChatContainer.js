import React, { useEffect, useState, useContext, useRef } from "react";
import UserMessage from "../../components/UserMessage";
import UserResponce from "../../components/UserResponce";
import InputMessage from "../../components/InputMessage";
import "./ChatContainer.scss";
import { SocketContext } from "../../Contexts/SocketContext";

const ChatContainer = () => {
  const [messageText, setMessagetext] = useState("");
  const [loading, setLoading] = useState(true);
  const [socketOpen, setSocketOpen] = useState(false);
  const messageSectionRef = useRef(null);

  const { socket, messageHistory } = useContext(SocketContext);

  const changeMessage = (event) => {
    setMessagetext(event.target.value);
  };

  const messageSend = (e) => {
    e.preventDefault();
    const event = {
      type: "message-sent",
      payload: {
        sender_id: 2,
        recipient_id: 1,
        content: messageText,
      },
    };
    socket.send(JSON.stringify(event));
    setMessagetext("");
  };

  const messageSandOnKey = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      messageSend(event);
    }
  };

  useEffect(() => {
    if (socket && !socketOpen) {
      setSocketOpen(true);
      console.log(socket);
      socket.onopen = () => {
        const event = {
          type: "messages",
          payload: {
            sender_id: 2,
            recipient_id: 1,
          },
        };
        socket.send(JSON.stringify(event));
      };
    }
  }, [socket]);

  useEffect(() => {
    messageSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageHistory]);

  return (
    <div className="chatContainer">
      <div className="messageSection">
        {messageHistory.map((message) => {
          return (
            <UserMessage
              key={message.message_id}
              messageText={message.content}
              createDate={message.createAt}
            />
          );
        })}
        <div ref={messageSectionRef}></div>
      </div>
      <InputMessage
        sendMessage={messageSend}
        pressKey={messageSandOnKey}
        changeMessage={changeMessage}
        inputValue={messageText}
      />
    </div>
  );
};

export default ChatContainer;
