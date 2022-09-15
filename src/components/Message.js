import { serverTimestamp, Timestamp } from "firebase/firestore";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import "../Pages/Home.css";

function Message({ message }) {
  console.log(message);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message.date)
  return (
    <div
      className={`message ${message.SenderId === currentUser.uid && "owner"} `}
    > 
      <div className="messageinfo">
        <img
          src={
            message.SenderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <div>
        <span>{message.date.ut}</span>
        </div>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}

export default Message;
