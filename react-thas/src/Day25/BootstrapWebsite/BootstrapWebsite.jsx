import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import BootstrapCards from "./BootstrapCards";
function BootstrapWebsite() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)" }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">PhotoGallery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="px-5">
              Food
            </Nav.Link>
            <Nav.Link href="#features" className="px-5">
              Animals
            </Nav.Link>
            <Nav.Link href="#pricing" className="px-5">
              Destinations
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <BootstrapCards />
    </>
  );
}
export default BootstrapWebsite;
