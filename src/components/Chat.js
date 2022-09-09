import React from "react";
import "../Pages/Home.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonIcon from "@mui/icons-material/Person";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import Messages from "./Messages";
import Input from "./Input"
function Chat() {
  return (
    <div className="chat">
      <div className="chatinfo">
        <span>Jane</span>
        <div className="chaticons">
          <VideocamIcon className="VideocamIcon" fontSize="small" />
          <PersonIcon className="PersonIcon" fontSize= "small" />
          <LinearScaleIcon className="LinearScaleIcon" fontSize="small" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
}

export default Chat;
