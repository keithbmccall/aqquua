import React from "react";

const Contact = props => {
  const renderAddresses = (address, key) => (
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
  const addresses = props.contactInfo.addresses.map(renderAddresses);
  return (
    <div className="flex-column Contact-section" id="Contact">
      <div className="flex-1 flex-content-center space-10 flex-column">
        <div className="Contact-holder">
          <h3>{props.contactInfo.title.toUpperCase()}</h3>
          <div className="Contact-caption">{props.contactInfo.caption}</div>
          <hr />
          <div className="flex collapse-row-column">
            <div className="Contact-addresses">{addresses}</div>
            <div className="Contact-form">
              <form>
                <div className="flex">
                  <input placeholder="First Name" className="Contact-fname" />

                  <input placeholder="Last Name" className="Contact-lname" />
                </div>
                <input placeholder="Email" className="Contact-email" />
                <textarea
                  placeholder="Message . . ."
                  className="Contact-message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
