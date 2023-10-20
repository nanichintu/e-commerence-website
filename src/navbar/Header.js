import React from "react";
import "./Header.css";
import logo from "./amazon-png.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AmazonImage from "./amazon.png";
import Amazon from "../Amazon/amazon";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img src={logo} alt="img_logo" id="header_logo" />
        </Link>

        <div to="/" className="header_search">
          <input
            type="text"
            className="header_searchInput"
            placeholder="Search Product"
          />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
          <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_optionlineOne">hello Qazi</span>
              <span className="header_optionlineTwo">Sign in</span>
            </div>
          </Link>

          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionlineOne">return</span>
              <span className="header_optionlineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionlineOne">your</span>
              <span className="header_optionlineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header_link">
            <div className="heder_optionBasket">
              <ShoppingBasketIcon id="icon" />
              <span className="count">0</span>
            </div>
          </Link>
        </div>
      </nav>

      <img
        src={AmazonImage}
        alt="background_image"
        className="amazon"
        width="100%"
        height="110%"
      />
      <Amazon />
    </div>
  );
};

export default Header;
