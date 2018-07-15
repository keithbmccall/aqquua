import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import SVG from "../tools/images/SVG";
import menu from "../../assets/images/svgs/menu.svg";

const Navbar = props => {
  const renderNavbarLinks = (link, key) => {
    return (
      <NavbarLinks
        link={link}
        key={key}
        scrollTo={props.scrollTo}
        closeMenu={props.closeMenu}
      />
    );
  };
  const navLinks = props.navbarLinks.map(renderNavbarLinks);
  let navMenuOpen = props.menuOpen ? "Nav-menu-open" : "";
  return (
    <header className="flex">
      <div className="Nav-container flex-1 flex">
        <div className="Nav-image-holder flex flex-center-vertical">
          <Link to="/">
            <SVG path={props.aqquuaLogo} className="image" fill="white" />
          </Link>
        </div>

        <nav className="Nav-menu-spread flex-1">{navLinks}</nav>
        <div
          className="flex flex-1 flex-center-vertical Nav-burger"
          onClick={props.toggleMenu}
        >
          <SVG path={menu} fill="white" className="image" />
        </div>
      </div>
      <nav className={`Nav-menu flex ${navMenuOpen}`}>{navLinks}</nav>
    </header>
  );
};
export default Navbar;
