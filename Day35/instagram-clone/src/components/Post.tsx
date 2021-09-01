import React, { useState } from "react";
import { PostType } from "../App";
import "./post.css";
import { BsThreeDots } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { IconContext } from "react-icons";

const Post = ({ postObj }: { postObj: PostType }) => {
  const [isLiked, setLiked] = useState(false);
  return (
    <div className="post">
      <div className="header">
        <div className="username pointer">{postObj.username}</div>
        <BsThreeDots className="menu-icon pointer" size="1.5em" />
      </div>
      <img src={postObj.img} alt="" />
      <div className="footer">
        {isLiked ? (
          <div style={{ display: "inline-block" }}>
            <IconContext.Provider value={{ color: "red" }}>
              <FaHeart
                size="1.7em"
                onClick={() => setLiked(!isLiked)}
                className="icons pointer"
              />
            </IconContext.Provider>
          </div>
        ) : (
          <div style={{ display: "inline-block" }}>
            <FiHeart
              size="1.7em"
              onClick={() => setLiked(!isLiked)}
              className="icons pointer"
            />
          </div>
        )}
        <RiChat3Line size="1.7em" className="icons pointer" />
        <FiSend size="1.7em" className="icons pointer" />
      </div>
    </div>
  );
};

export default Post;
