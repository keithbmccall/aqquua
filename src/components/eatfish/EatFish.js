import React from "react";
import WaveAnimation from "../../components/animations/WaveAnimation";
import BackArrow from "../../components/tools/images/BackArrow";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentList from "../tools/text/ContentList";
import ContentLargeVideo from "../tools/media/ContentLargeVideo";
const EatFish = props => {
  const { info } = props;

  return (
    <div className="container">
      <WaveAnimation color="white" />
      <div className="Eat-fish-container">
        <BackArrow color={info.titleColor} />
        <LargeTextWithTitle info={info} />
        <ContentList info={info} />
        <ContentLargeVideo info={info} />
      </div>
    </div>
  );
};

export default EatFish;
