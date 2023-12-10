import React from "react";
import Header from "../../components/Header";
import ChatContainer from "../ChatContainer/ChatContainer";
import ChatsBar from "../ChatsBar/ChatsBar";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="appContainer">
        <ChatsBar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default MainPage;
