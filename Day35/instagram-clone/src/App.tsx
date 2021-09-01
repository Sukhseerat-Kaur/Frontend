import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userDataType, updateUser } from "./actions";
import Landing from "./components/Landing";

export interface PostType {
  username: string;
  img: string;
}
function App() {
  const userData = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Landing posts={posts} />
    </div>
  );
}

export default App;
