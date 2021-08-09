import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import Cards from "./Cards";

function App() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)" }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="px-5">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="px-5">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="px-5">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Cards />
    </>
  );
}
export default App;
