import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const MovieNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Nav.Link href='/'>
            <span role="img" aria-label="book">
            🎬
            </span>
        </Nav.Link>
        <Navbar.Brand href="/">Movie Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>
              <span role="img" aria-label="book">
              🎞️
              </span>
            </Nav.Link>
            
            <NavDropdown title="Movies" id="basic-nav-dropdown" menuVariant="dark">
                <NavDropdown.Item href="#">Genre</NavDropdown.Item>
                <NavDropdown.Divider />
              <Nav.Link>
                <NavDropdown.Item href="/comedy">Comedy</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link href="/horror">
                <NavDropdown.Item href="/horror">Horror</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link href="/scifi">
                <NavDropdown.Item href="/scifi">Science-Fiction</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link href="/thriller">
                <NavDropdown.Item href="/thriller">Thriller</NavDropdown.Item>
              </Nav.Link>
            </NavDropdown>
            
            <Nav.Link href='/'>
              <span role="img" aria-label="book">
              🍿
              </span>
            </Nav.Link>
            <NavDropdown title="Series" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#">Genre</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Science-Fiction</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MovieNavbar;