import React, { useState } from "react";
import SVG from "react-inlinesvg";
import VoiceMessage from "../../assets/voiceMessage.svg";
import AddFile from "../../assets/addFile.svg";
import "./InputMessage.scss";

const InputMessage = (props) => {
  const { sendMessage, changeMessage, inputValue, pressKey } = props;

  return (
    <form className="inputMessage" onSubmit={sendMessage}>
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        className="userMessage"
        placeholder="Write a message..."
        value={inputValue}
        onChange={changeMessage}
        onKeyDown={pressKey}
      ></textarea>
      <div className="messageActions">
        <div className="addToMessage">
          <SVG src={VoiceMessage} className="addToMessageButton" />
          <SVG src={AddFile} className="addToMessageButton" />
        </div>
        <button className="sendMessage">Send</button>
      </div>
    </form>
  );
};

export default InputMessage;
