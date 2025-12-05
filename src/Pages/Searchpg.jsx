import React from "react";

const Searchpg = () => {
  return (
    <div className="Searchpg-mainbox">
      <div className="searchpg-second">
        <div className="searchbox-input">
          <input
            className="searchpg-search"
            type="text"
            placeholder="🔍 Search Product..."
          />
          <button className="searchpg-button">Close</button>
        </div>

        <div className="searched-cards"></div>
      </div>
    </div>
  );
};

export default Searchpg;
