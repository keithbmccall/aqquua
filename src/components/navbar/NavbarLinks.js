import React from "react";
import Radium from "radium";
import { Link as ScrollLink } from "react-scroll";

const NavbarLinks = props => {
  const styles = {
    navItem: {
      ":hover": { backgroundColor: props.link.color }
    }
  };
  console.log(props.link.link);
  return (
    <li className="Nav-item flex flex-content-center" style={[styles.navItem]}>
      {props.routing.location.pathname === "/" ? (
        props.link.link ? (
          <a href={`/${props.link.id}`}>{props.link.title.toUpperCase()}</a>
        ) : (
          <ScrollLink
            activeclass="active"
            to={props.link.id}
            spy={true}
            smooth={true}
            duration={1000}
            onClick={props.closeMenu}
          >
            {props.link.title.toUpperCase()}
          </ScrollLink>
        )
      ) : props.link.link ? (
        <a href={`/${props.link.id}`}>{props.link.title.toUpperCase()}</a>
      ) : (
        <a href={`/#${props.link.id}`}>{props.link.title.toUpperCase()}</a>
      )}
    </li>
  );
};

export default Radium(NavbarLinks);
