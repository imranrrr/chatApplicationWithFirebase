import React from "react";
import "../Pages/Home.css";
function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img
          src="https://images4.alphacoders.com/910/thumb-1920-910405.jpg"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
