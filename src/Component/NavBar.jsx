import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

function Barra() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="nav-container justify-content-evenly">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create Product</Nav.Link>
            <Nav.Link href="stock">Stock</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Barra;
