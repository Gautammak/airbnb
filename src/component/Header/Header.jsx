import { Language, SearchRounded } from "@material-ui/icons";

import React from "react";
import BasicMenu from "../Profilemenu/Profilemenu";

import "./Header.css";

function Header() {
  return (
    <div className="header container">
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      />

      <div className="header_center">
        <div className="anywherebtn">
          <button className="anywhere"> Anywhere</button>
        </div>
        |
        <div>
          <button className="Anyweek"> Any week</button>
        </div>
        |
        <div className="searchcontainer">
          <input className="searchbox" type="text" placeholder=" add guest" />
          <SearchRounded className="searchicon" />
        </div>
      </div>

      <div className="header_right">
        <p> Airnb your home </p>
        <Language />

        <div className="Menu">
          <BasicMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
