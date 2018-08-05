import React from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import menu from "../../assets/images/svgs/menu.svg";
import { withRouter } from "react-router-dom";
import SVGC from "../tools/images/SVG";

const Navbar = props => {
  const renderNavbarLinks = (link, key) => {
    return (
      <NavbarLinks
        link={link}
        key={key}
        closeMenu={props.closeMenu}
        routing={props.history}
      />
    );
  };
  const navLinks = props.navbarLinks.map(renderNavbarLinks);
  let navMenuOpen = props.menuOpen ? "Nav-menu-open" : "";
  return (
    <header className="border">
      <Link to="/">
        <SVGC path={props.aqquuaLogo} className="image" fill="white" />
      </Link>

      <SVGC path={menu} fill="white" className="image" />
    </header>
  );
};
export default withRouter(Navbar);
