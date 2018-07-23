import React from "react";
import Radium from "radium";
import { Link as ScrollLink } from "react-scroll";

const NavbarLinks = props => {
  const styles = {
    navItem: {
      ":hover": { backgroundColor: props.link.color }
    }
  };
  return (
    <li className="Nav-item flex flex-content-center" style={[styles.navItem]}>
      {props.routing.location.pathname === "/" ? (
        <ScrollLink
          activeclass="active"
          to={props.link.id}
          spy={true}
          smooth={false}
          duration={900}
          onClick={props.closeMenu}
        >
          {props.link.title.toUpperCase()}
        </ScrollLink>
      ) : (
        <a href={`/#${props.link.id}`}>{props.link.title}</a>
      )}
    </li>
  );
};

export default Radium(NavbarLinks);
