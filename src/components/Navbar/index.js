import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({ toggle, isOpen, ordering }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
      </Nav>
      <NavIcon ordering={ordering} isOpen={isOpen} onClick={toggle}>
        <p>Your Order</p>
        <Bars />
      </NavIcon>
    </>
  );
};

export default Navbar;
