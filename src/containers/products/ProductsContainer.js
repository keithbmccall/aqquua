import React, { Component, Fragment } from "react";
import WaveAnimation from "../../components/animations/WaveAnimation";
//
export default class ProductsContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="container Products-container">
          <WaveAnimation color="grey" />

          {/* <Link to="/"> */}
          <div style={{ background: "grey", height: "100vh", width: "100vw" }}>
            <div style={{ height: "100px",width: '100px' }} className="border"/>
          </div>
          {/* </Link> */}
        </div>
      </Fragment>
    );
  }
}
