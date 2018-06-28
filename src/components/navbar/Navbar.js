import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import FaBars from "react-icons/lib/fa/bars";
import NavbarLinks from "./NavbarLinks";

const Navbar = props => {
  const renderNavbarLinks = (link, key) => {
    return <NavbarLinks link={link} key={key} />;
  };
  const navLinks = props.navbarLinks.map(renderNavbarLinks);
  const navMenuOpen = props.menuOpen ? "Nav-menu-open" : "";
  return (
    <header>
      <div className="container Nav-container flex flex-space-between">
        <div className="flex flex-center-vertical">
          <div className="Nav-image-holder">
            <Link to="/">
              <img
                src={props.aqquuaHead}
                alt={props.aqquuaHead}
                className="image"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-center-vertical" onClick={props.toggleMenu}>
          <FaBars size={30} color="white" />
        </div>
      </div>

      <nav
        className={`Nav-menu flex ${navMenuOpen}`}
        onClick={props.toggleMenu}
      >
        {navLinks}
      </nav>
    </header>
  );
};
export default Navbar;
