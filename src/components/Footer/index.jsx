
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




    // <div className="footer font-small bg-white  pt-4">
    //   <div className="footer-contentt text-center py-3">
    //     <hr />
    //     © 2021 Copyright:<a href="https://mdbootstrap.com/">PHOTOS</a>
    //     <div className="social-networks">
    //       <AiFillFacebook className="icon" />
    //       <AiFillTwitterSquare className="icon" />
    //       <AiFillInstagram className="icon" />
    //     </div>
    //   </div>
    // </div>
  );
};
