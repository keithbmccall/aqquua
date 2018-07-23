import React from "react";
import WaveAnimation from "../../components/animations/WaveAnimation";
import BackArrow from "../tools/images/BackArrow";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentLargeVideo from "../tools/media/ContentLargeVideo";

const Farm = props => {
  const { info } = props;
  console.log(info);
  return (
    <div className="container">
      <WaveAnimation color="white" />
      <div className="Farm-container">
        <BackArrow color={info.titleColor} />
        <LargeTextWithTitle info={info} />
        <ContentLargeVideo info={info} />
      </div>
    </div>
  );
};
export default Farm;
