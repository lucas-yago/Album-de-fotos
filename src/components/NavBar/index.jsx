
import './styles.scss';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { SearchBar } from '../SearchBar';
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from 'react';




export const NavBar = () => {

  const [DarkTheme, setDarkTheme] = useState(false);
  const toggle = () => { setDarkTheme(!DarkTheme) }

  useEffect(() => {
    if (DarkTheme) {
      document.body.classList.add('dark-theme')

    } else {
      document.body.classList.remove('dark-theme')

    }
    console.log(DarkTheme)
  }, [DarkTheme]);

  return (
    <Navbar sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">PHOTOS</Navbar.Brand>

        <SearchBar />

        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse className="navbarcollapse">

          <Form className="container-theme" >
            <Form.Check
              type="switch"
              className="switch-theme"
              checked={DarkTheme}
              onChange={toggle}
            />
          </Form>

          <Nav >
            <Nav.Link href="#user"><AiOutlineUser className="userIcon" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};
