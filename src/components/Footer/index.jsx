import { Container, Navbar, Nav } from 'react-bootstrap';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import './styles.scss';

export const Footer = () => {

  return (
    <Navbar className="footer">
      <Container className="container" >
        <hr />
        <Nav className="container-content">
          <Navbar.Text href="home">PHOTOS</Navbar.Text>
          <Navbar.Text>All rights reserved</Navbar.Text>
          <Nav >
            <Nav.Link href="Facebook"> <AiFillFacebook className="icon" /> </Nav.Link>
            <Nav.Link href="Twitter"> <AiFillTwitterSquare className="icon" /> </Nav.Link>
            <Nav.Link href="Instagram"> <AiFillInstagram className="icon" /> </Nav.Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};
