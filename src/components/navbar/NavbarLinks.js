import React from "react";
import Radium from "radium";
import { Link } from "react-scroll";

const NavbarLinks = props => {
  const styles = {
    navItem: {
      ":hover": { backgroundColor: props.link.color }
    }
  };
  console.log(props.routing.location.pathname);
  return (
    <li className="Nav-item flex flex-content-center" style={[styles.navItem]}>
      {props.routing.location.pathname === "/" ? (
        <Link
          activeClass="active"
          to={props.link.id}
          spy={true}
          smooth={false}
          duration={500}
          onClick={props.closeMenu}
        >
          {props.link.title}
        </Link>
      ) : (
        <a href={`/#${props.link.id}`}>{props.link.title}</a>
      )}
    </li>
  );
};

export default Radium(NavbarLinks);
