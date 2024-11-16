import React, { useEffect, useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/logo.png";
import SearchIcon from "../../assets/Search_Icon.svg";
import bell_Icon from "../../assets/bell_Icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Header = () => {
  return (
    <div className={`header_outer_container`}>
      <div className={"header_container"}>
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <img src={SearchIcon} alt="" />
            </li>
            <li>
              <img src={bell_Icon} alt="" />
            </li>
            <li>
              <img src={profile_img} alt="" />
            </li>
            <li>
              <img src={caret_icon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
