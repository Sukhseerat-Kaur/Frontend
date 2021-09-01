import React from "react";
import { PostType } from "../App";

const Post = ({ postObj }: { postObj: PostType }) => {
  return (
    <div className="post">
      <img src={postObj.img} alt="" />
    </div>
  );
};

export default Post;
