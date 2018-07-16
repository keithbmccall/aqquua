import React, { Component } from "react";
//
export default class Contact extends Component {
  renderAddresses = (address, key) => (
    <address translate="no" key={key}>
      <p>
        <span>{address.country}</span>
        <br />
        {address.title}
        <br />
        {address.street}
        <br />
        {address.city}
        <br />
        {address.phone}
      </p>
    </address>
  );

  render() {
    const addresses = this.props.contactInfo.addresses.map(
      this.renderAddresses
    );

    return (
      <div className="flex-column Contact-section" id="Contact">
        <div className="flex-1 flex-content-center space-10 flex-column">
          <div className="Contact-holder">
            <h3>{this.props.contactInfo.title.toUpperCase()}</h3>
            <div className="Contact-caption">
              {this.props.contactInfo.caption}
            </div>
            <div className="flex collapse-row-column">
              <div className="Contact-addresses">{addresses}</div>

              <div className="Contact-form">
                <form>
                  <div className="flex">
                    <input placeholder="First Name" />

                    <input placeholder="Last Name" />
                  </div>
                  <input placeholder="Email" />
                  <textarea placeholder="Message" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
