import React from "react";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../index.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect>
      <Container className="navBar">
        <Container className="navBarLogoContainer">
          <NavbarBrand href="/" className="navBarLogo">
            ÁLEF ÁDONIS
          </NavbarBrand>
          <NavbarBrand href="/" className="navBarSubLogo">
            Software Engineer
          </NavbarBrand>
        </Container>
        <Container className="navBarTextContainer">
          <Nav.Link className="navBarText" href="#home">
            About me
          </Nav.Link>
          <Nav.Link className="navBarText" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className="navBarText" href="#experience">
            Experience
          </Nav.Link>
          <Nav.Link className="navBarText" href="#soc-activities">
            Social Activities
          </Nav.Link>
        </Container>
        <Container className="navBarButtonContainer">
          <Button
            id="contact"
            type="button"
            className="navBarButton"
            onClick={() => {}}
          >
            Contact me!
          </Button>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Header;
