import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import "../css/NavigationBar.css";
import Logo from "../assets/nav-logo.png";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar fixed="top" expand="md">
      <Link to="/" style={{ fontSize: "2rem" }}>
        <img src={Logo} style={{height: '40px', width:'60px'}} alt="navigation bar logo" />
        <a>PetConnect</a>
      </Link>
      <NavbarToggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link to="/account">Account</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
