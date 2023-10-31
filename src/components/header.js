import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/header.css';
import Logo from '../assets/images/logo.png';
function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">SpheraHeads</Nav.Link>
            <Nav.Link href="#link">Sphera Token</Nav.Link>
            <Nav.Link href="#link">INO</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Community</Nav.Link>
            <Nav.Link href="#link">Docs</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link" className='open_app'>Open app</Nav.Link>
            <Nav.Link href="#link">العربية</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;