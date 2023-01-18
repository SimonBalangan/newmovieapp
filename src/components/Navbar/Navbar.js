import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const MovieNavbar = () => {
  return (
    // <nav bg="dark" variant="light" expand="lg">
    //   <div className="container">
    //     <Link to="/" className="navbar-brand">
    //       Home!
    //       <span role="img" aria-label="book">
    //         🌍
    //       </span>
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link to="/" className="nav-link" style={{ cursor: "pointer" }}>
    //             <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
    //               Home
    //             </span>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             to="/horror"
    //             className="nav-link"
    //             style={{ cursor: "pointer" }}
    //           >
    //             <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
    //               Horror
    //             </span>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             to="/contact"
    //             className="nav-link"
    //             style={{ cursor: "pointer" }}
    //           >
    //             <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
    //               Contact
    //             </span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>


    
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Movie Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          
            <Nav.Link href='/'>
              <span role="img" aria-label="book">
              🍿
              </span>
            </Nav.Link>
            
    
            
            <NavDropdown title="Movies" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#">Genre</NavDropdown.Item>
              <NavDropdown.Divider />
              <Nav.Link>
                <NavDropdown.Item href="#action/comedy">Comedy</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link>
                <NavDropdown.Item href="/horror">Horror</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link>
              <NavDropdown.Item href="#action/SciFi">Science-Fiction</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link>
              <NavDropdown.Item href="#action/Thriller">Thriller</NavDropdown.Item>
              </Nav.Link>
            </NavDropdown>
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