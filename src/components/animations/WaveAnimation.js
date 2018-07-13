import React from "react";

const WaveAnimation = props => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 720 180.813"
      enableBackground="new 0 0 720 180.813"
      fill={props.color}
      className="wave"
    >
      <path d="M0,175.813c0,0,139.515,0,345,0c162,0,269.854,0,320,0c34,0,55,0,55,0v5H0V175.813z">
        <animate
          dur="1s"
          // begin=".3s"
          attributeName="d"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          values="M0,64.84c0,0,183.974-145.891,328.681,0c144.707,145.891,317.947,82.877,345.8,60.959
      C702.336,103.881,720,108.813,720,108.813v72H0V64.84z;M0,175.813c0,0,139.515,0,345,0c162,0,269.854,0,320,0c34,0,55,0,55,0v5H0V175.813z;M0,175.813c0,0,139.515,0,345,0c162,0,269.854,0,320,0c34,0,55,0,55,0v5H0V175.813z"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </path>
    </svg>
  );
};
export default WaveAnimation;
