import React from "react";
import SearchInput from "../SearchInput";
import ChatItem from "../ChatItem/ChatItem";
import "./ChatsBar.scss";

const chatBar = () => {
  return (
    <div className="chatBarContainer">
      <div className="searchSection">
        <SearchInput />
      </div>
      <div className="chats">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
};

export default chatBar;
