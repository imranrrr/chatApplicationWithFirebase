import React, { useContext } from "react";
import "../Pages/Home.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonIcon from "@mui/icons-material/Person";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";
function Chat() {
  const {data} = useContext(ChatContext)
  return (
    <div className="chat">
      <div className="chatinfo">
        <div className="chatimg" >
      <img src={data.user?.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
        </div>
        <div className="chaticons">
          <VideocamIcon className="VideocamIcon" fontSize="small" />
          <PersonIcon className="PersonIcon" fontSize="small" />
          <LinearScaleIcon className="LinearScaleIcon" fontSize="small" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
