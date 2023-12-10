import React from "react";
import "./UserMessage.scss";

const UserMessage = (props) => {
  const { messageText, createDate } = props;
  return (
    <div className="messageContainer">
      <p className="messageText">{messageText}</p>
      <p className="messageTime">{createDate}</p>
    </div>
  );
};

export default UserMessage;
