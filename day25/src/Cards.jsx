import Card from "react-bootstrap/Card";
import { CardColumns, Button, Container, Row, Col } from "react-bootstrap";
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
    <Container>
      <Row>
        {data.map((character) => (
          <Col xs="6" sm="4">
            <Card key={character.id} style={{ width: "20rem", margin: "5rem" }}>
              <Card.Img
                variant="top"
                src={character.download_url}
                style={{ height: "15rem" }}
              />

              <Card.Body>
                <Card.Title>{character.author}</Card.Title>
                <Button variant="primary" href={character.url} target="_blank">
                  More Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Cards;
