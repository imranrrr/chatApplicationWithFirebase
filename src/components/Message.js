import React from "react";
import "../Pages/Home.css";
function Message() {
  return (
    <div className="message owner">
      <div className="messageinfo">
        <img
          src="https://images4.alphacoders.com/910/thumb-1920-910405.jpg"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messgaecontent">
        <p>hello</p>
        <img
          src="https://images4.alphacoders.com/910/thumb-1920-910405.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
