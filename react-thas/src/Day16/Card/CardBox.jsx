import image from "./photo.jpg";
function CardBox() {
  return (
    <div className="card">
      <img src={image} alt="" />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <h1>Card Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque unde
        minus praesentium maiores ullam libero nam architecto sequi, quos
        voluptate suscipit temporibus pariatur repudiandae debitis provident,
        atque aut minima ipsam.
      </p>
    </div>
  );
}

export default CardBox;
