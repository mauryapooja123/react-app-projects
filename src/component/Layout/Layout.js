import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact US</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about">ABOUT US</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Layout;
