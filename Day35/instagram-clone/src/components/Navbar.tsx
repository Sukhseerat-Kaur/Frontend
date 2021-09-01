import React from "react";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { reducerType } from "../reducers";
const Navbar = () => {
  const userData = useSelector((state: reducerType) => state.userReducer);
  return (
    <div className="navbar">
      <div className="container">
        <img src="/images/logo.png" alt="instagram-logo" />
        <div className="search-bar-container">
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <span>
            <AiFillHome size="1.5em" className="pointer" />
          </span>
          <span>
            <RiChat3Line size="1.6em" className="pointer" />
          </span>
          <span>
            <FaRegCompass size="1.5em" className="pointer" />
          </span>
          <span>
            <FiHeart size="1.5em" className="pointer" />
          </span>
          <span className="profile-picture">
            <img src={userData.profilePicture} alt="" className="pointer" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
