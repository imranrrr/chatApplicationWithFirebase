import React from "react";
import "../Pages/Home.css";
function Chats() {
  return (
    <div className="chats">
      <div className="userchat">
        <img
          src="https://images4.alphacoders.com/910/thumb-1920-910405.jpg"
          alt=""
        />
        <div className="userChatinfo">
          <span>jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchat">
        <img
          src="https://images4.alphacoders.com/910/thumb-1920-910405.jpg"
          alt=""
        />
        <div className="userChatinfo">
          <span>jane</span>
          <p>Hello</p>
        </div>
      </div>{" "}
      <div className="userchat">
        <img
          src="https://images4.alphacoders.com/910/thumb-1920-910405.jpg"
          alt=""
        />
        <div className="userChatinfo">
          <span>jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
