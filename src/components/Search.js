import React from "react";
import "../Pages/Home.css";
function Search() {
  return (
    <div className="search">
      <div className="searchform">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userchat">
        <img
          src="https://images4.alphacoders.com/910/thumb-1920-910405.jpg"
          alt=""
        />
        <span>jane</span>
      </div>
    </div>
  );
}

export default Search;
