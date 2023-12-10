import React from "react";
import UserPhoto from "../../../assets/UserPhoto.png";
import "./UserAvatar.scss";

const UserAvatar = () => {
  return <img className="userPhoto" src={UserPhoto}></img>;
};

export default UserAvatar;
