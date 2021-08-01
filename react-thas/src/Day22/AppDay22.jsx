import { useState, useEffect } from "react";

import Meme from "./Meme";
import Template from "./Template";
import "./StyleDay22.css";

const AppDay22 = () => {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);

  return (
    <div className="app-day-22">
      <h1>Meme Generator!</h1>
      {meme === null ? (
        <Template setMeme={setMeme} templates={templates} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
};

export default AppDay22;
