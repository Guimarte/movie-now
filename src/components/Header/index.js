import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import StyledNav from './styles'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to='/'>
      <Navbar.Brand href="">Movie Now</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledNav className="mr-auto">
          <Nav>Seja Bem-Vindo</Nav>
                   
          </StyledNav>
          <Nav >
          <Button variant="outline-danger">Sign Out</Button>                   
          </Nav>
          
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
