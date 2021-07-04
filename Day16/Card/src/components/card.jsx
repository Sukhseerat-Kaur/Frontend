import Content from "./content";
import image from "../hy.jpg";

function card() {
  return (
    <div className="card">
      <img src={image} alt="" />
      <Content />
    </div>
  );
}

export default card;
