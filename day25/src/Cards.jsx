import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  data.map((image) => console.log(image.url));

  return (
    <div>
      {data.map((character) => (
        <Card key={character.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={character.download_url} />
          {/* <img src={character.url} /> */}
        </Card>
      ))}
    </div>
  );
}
export default Cards;
