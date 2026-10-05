import React from "react";
import "./header.css";
import logo from "../../assets/image/logos.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
function Header() {
  return (
    <div className="header-outer-container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li>Home</li>
            <li>TVshow</li>
            <li>Movies</li>
            <li>latest</li>
            <li>myList</li>
            <li>browse by languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowCircleDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
