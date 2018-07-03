import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import FaBars from "react-icons/lib/fa/bars";
import NavbarLinks from "./NavbarLinks";
import SVG from "../tools/images/SVG";

const Navbar = props => {
  const renderNavbarLinks = (link, key) => {
    return <NavbarLinks link={link} key={key} />;
  };
  const navLinks = props.navbarLinks.map(renderNavbarLinks);
  const navMenuOpen = props.menuOpen ? "Nav-menu-open" : "";
  return (
    <header>
      
    </header>
  );
};
export default Navbar;
