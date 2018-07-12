import React from "react";
import Radium from "radium";
import { Link } from "react-scroll";

const NavbarLinks = props => {
  const styles = {
    navItem: {
      ":hover": { backgroundColor: props.link.color }
    }
  };
  return (
    <li className="Nav-item flex flex-content-center" style={[styles.navItem]}>
      <Link
        activeClass="active"
        to={props.link.id}
        spy={true}
        smooth={true}
        duration={500}
        onClick={props.closeMenu}
      >
        {props.link.title}
      </Link>
    </li>
  );
};

export default Radium(NavbarLinks);
