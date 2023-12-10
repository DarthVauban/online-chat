import React from "react";
import settingIcon from "../../../assets/setting-icon.svg";
import SVG from "react-inlinesvg";
import "./SettingButton.scss";

const SettingButton = () => {
  return (
    <button className="settingButton">
      <SVG src={settingIcon} width={24} className="buttonIcon" />
    </button>
  );
};

export default SettingButton;
