import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import SVG from "../../components/tools/images/SVG";
import wave from "../../assets/images/svgs/wave.svg";
import line from "../../assets/images/svgs/line.svg";
import anime from "animejs";
import Anime from "react-anime";
//
export default class ProductsContainer extends Component {
  constructor() {
    super();
    this.state = {
      which: true
    };
  }

  render() {
    const curve = (
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 720 180.813"
        enableBackground="new 0 0 720 180.813"
        fill="grey"
        className="wave"
      >
        <Anime
          easing="easeOutQuint"
          delay={1000}
          duration={1000}
          autoplay={true}
          d="M0,175.813c0,0,139.515,0,345,0c162,0,269.854,0,320,0c34,0,55,0,55,0v5H0V175.813z"
        >
          <path
            d="M0,64.84c0,0,183.974-145.891,328.681,0c144.707,145.891,317.947,82.877,345.8,60.959
	C702.336,103.881,720,108.813,720,108.813v72H0V64.84z"
          />
        </Anime>
      </svg>
    );

    return (
      <Fragment>
        <div className="container">
          {curve}

          {/* <Link to="/"> */}
          <div style={{ background: "grey", height: "100vh", width: "100vw" }}>
            prods
          </div>
          {/* </Link> */}
        </div>
      </Fragment>
    );
  }
}
