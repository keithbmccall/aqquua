import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import { aqquuaLogo, navbarLinks } from "../../data";

export default class NavbarContainer extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }
  toggleMenu = e => {
    e.preventDefault();
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };
  closeMenu = () => {
    this.setState({
      menuOpen: false
    });
  };
  componentDidMount() {
    this.closeMenu();
    window.addEventListener("resize", () => this.closeMenu());
  }
  render() {
    return (
      <Navbar
        scrollTo={this.props.scrollTo}
        aqquuaLogo={aqquuaLogo.round}
        backButton={aqquuaLogo.back}
        menuOpen={this.state.menuOpen}
        navbarLinks={navbarLinks}
        toggleMenu={this.toggleMenu}
        closeMenu={this.closeMenu}
      />
    );
  }
}
