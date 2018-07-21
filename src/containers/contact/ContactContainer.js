import React, { Component } from "react";
import Contact from "../../components/contact/Contact";
//
export default class ContactContainer extends Component {
  render() {
    

    return <Contact contactInfo={this.props.contactInfo} />;
  }
}
