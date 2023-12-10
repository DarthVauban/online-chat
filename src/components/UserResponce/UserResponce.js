import React from "react";
import UserAvatar from "../../assets/UserPhoto.png";
import "./UserResponce.scss";

const UserResponce = () => {
  return (
    <div className="responceContainer">
      <div className="responceUserPhotoContainer">
        <img src={UserAvatar} alt="" className="responceUserPhoto" />
        <span className="userStatus"></span>
      </div>
      <div className="responceMessage">
        <p className="responceUserName">Caesar</p>
        <p className="responceText">I don’t know, but a lot of boys like her</p>
        <p className="responceMessageTime">8:54 AM</p>
      </div>
    </div>
  );
};

export default UserResponce;
