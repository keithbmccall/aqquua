import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductsContainer extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/">
          <div style={{ background: "grey", height: "100vh", width: "100vw" }}>
            prods
          </div>
        </Link>
      </div>
    );
  }
}
