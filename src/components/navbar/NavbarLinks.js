import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";

const NavbarLinks = props => {
  console.log(props);
  const styles = {
    navItem: {
      ":hover": { backgroundColor: props.link.color }
    }
  };
  return (
    <li className="Nav-item flex flex-content-center" style={[styles.navItem]}>
      <a href={`/#${props.link.id}`}>{props.link.title}</a>
    </li>
  );
};

export default Radium(NavbarLinks);
