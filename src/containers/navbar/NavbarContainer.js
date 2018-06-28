import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";

export default class NavbarContainer extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }
  toggleMenu = e =>
    this.setState({
      menuOpen: !this.state.menuOpen
    });

  render() {
    return (
      <Navbar
        aqquuaHead={this.props.aqquuaHead}
        menuOpen={this.state.menuOpen}
        navbarLinks={this.props.navbarLinks}
        toggleMenu={this.toggleMenu}
      />
    );
  }
}
