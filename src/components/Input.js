import React from "react";
import "../Pages/Home.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PermMediaIcon from "@mui/icons-material/PermMedia";
function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type somehing..." />
      <div className="send">
        <AttachFileIcon className="AttachFileIcon" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="">
          <PermMediaIcon className="AttachFileIcon" />{" "}
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
