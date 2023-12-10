import React from "react";
import OptionsIcon from "../../../assets/Options.svg";
import SVG from "react-inlinesvg";
import "./OptionsButton.scss";

const OptionsButton = () => {
  return (
    <button className="settingButton">
      <SVG src={OptionsIcon} width={24} className="buttonIcon" />
    </button>
  );
};

export default OptionsButton;
