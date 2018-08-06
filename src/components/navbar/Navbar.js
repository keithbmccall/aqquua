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
  let isLaunched = props.menuOpen ? "Nav-open" : "Nav-closed";
  return (
    <header>
      <div className="Navbar-container">
        <Link to="/" className="Nav-logo ">
          <SVGC path={props.aqquuaLogo} className="image" fill="#85dbd7" />
        </Link>
        <a
          href="#"
          onClick={props.toggleMenu}
          className={`Nav-burger ${isLaunched}`}
        >
          <SVGC path={menu} fill="white" className="image" />
        </a>
        <div className={`Nav-menu ${isLaunched}`} onClick={props.closeMenu} />
        <nav className={`${isLaunched}`} onClick={props.closeMenu}>
          {navLinks}
        </nav>
      </div>
    </header>
  );
};
export default withRouter(Navbar);
