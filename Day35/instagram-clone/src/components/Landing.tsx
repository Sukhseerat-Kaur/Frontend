import React from "react";
import "./landing.css";
import { useSelector } from "react-redux";
import { reducerType } from "../reducers";
import { PostType } from "../App";
import Post from "./Post";

const Landing = ({ posts }: { posts: PostType[] }) => {
  const userData = useSelector((state: reducerType) => state.userReducer);
  console.log(posts);

  return (
    <div className="landing">
      <div className="stories">
        {[...Array(20)].map((_, index) => {
          return (
            <div className="one-story" key={index}>
              <div className="story-img">
                <img src={userData.profilePicture} alt="" />
                <div className="name">{userData.username}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="posts">
        {[
          ...posts.map((postObj, index) => {
            return <Post postObj={postObj} key={index} />;
          }),
        ]}
      </div> */}
    </div>
  );
};

export default Landing;
