import React, { useContext } from "react";
import { ButtonsContext } from "../context/Buttonscontext.js";

const Searchpg = () => {
  const { goTohome } = useContext(ButtonsContext);
  return (
    <div className="Searchpg-mainbox">
      <div className="searchpg-second">
        <div className="searchbox-input">
          <input
            className="searchpg-search"
            type="text"
            placeholder="🔍 Search Product..."
          />
          {/* <Link to="/">    */}
          <button onClick={goTohome} className="searchpg-button">
            Close
          </button>
          {/* </Link> */}
        </div>

        <div className="searched-cards"></div>
      </div>
    </div>
  );
};

export default Searchpg;
