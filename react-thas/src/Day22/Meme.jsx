import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "teasty",
    password: "PPS$Asr52ttCfaF",
    boxes: [],
  });

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;

    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
      return "";
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setMeme({ ...meme, url: data.data.url });
        }
      });
  };

  return (
    <div className="meme">
      <img src={meme.url} alt="meme.title" />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme Caption ${index}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          />
        ))}
      </div>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose another template
        </button>
      </div>
    </div>
  );
};

export default Meme;
