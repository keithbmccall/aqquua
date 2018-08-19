import React from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavbarLinks = props => {
  const styles = {
    navItem: {
      ":hover": { color: props.link.color }
    }
  };
  // console.log(props.link.link, props.link.id, props);
  const linkOrHash = path =>
    props.link.link ? (
      <HashLink to={`/${props.link.id}`}>{path}</HashLink>
    ) : (
      <HashLink to={`/#${props.link.id}`}>{path}</HashLink>
    );
  return (
    <li className="Nav-item flex flex-content-center" style={[styles.navItem]}>
      {linkOrHash(props.link.title.toUpperCase())}
    </li>
  );
};

export default Radium(NavbarLinks);
