import React from "react";
import SVG from "react-inlinesvg";
import HeaderLogo from "../../assets/Logo.svg";
import SettingButton from "../Buttons/SettingButton";
import OptionsButton from "../Buttons/OpionsButton/OptionsButton";
import UserAvatar from "../Avatars/UserAvatar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <SVG className="headerLogo" src={HeaderLogo} />
      </div>
      <div className="currentChat">
        <p className="currentUser">
          <span className="currentUserName">Caesar</span> last seen 5 min ago
        </p>
      </div>
      <div className="actionPanel">
        <SettingButton />
        <OptionsButton />
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
