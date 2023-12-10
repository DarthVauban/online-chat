import React from "react";
import UserImage from "../../assets/UserPhoto.png";
import "./ChatItem.scss";

const chatItem = () => {
  return (
    <div className="itemContainer">
      <div className="imageSectoin">
        <img src={UserImage} alt="" className="chatImage" />
        <span className="userStatus"></span>
      </div>
      <div className="chatInfo">
        <p className="userName">Zack Fox</p>
        <p className="lasMessage">Have you ever heard of...</p>
      </div>
      <div className="chatSystemInfo">
        <p className="lastMessageTime">10:49 AM</p>
        <p className="messageCount">3</p>
      </div>
    </div>
  );
};

export default chatItem;
