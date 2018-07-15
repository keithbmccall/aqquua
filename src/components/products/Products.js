import React from "react";
import WaveAnimation from "../animations/WaveAnimation";

const Products = props => {
  return (
    <div className="container Products-container">
      <WaveAnimation color="grey" />

      <div style={{ background: "grey", height: "100vh", width: "100vw" }}>
        <div style={{ height: "100px", width: "100px" }} className="border" />
      </div>
    </div>
  );
};

export default Products;
