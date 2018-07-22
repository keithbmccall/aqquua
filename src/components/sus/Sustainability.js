import React from "react";
import WaveAnimation from "../../components/animations/WaveAnimation";
import BackArrow from "../../components/tools/images/BackArrow";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentImages from "../tools/media/ContentImages";
//
const Sustainability = props => {
  const { info } = props;

  return (
    <div className="container">
      <WaveAnimation color="white" />
      <div className="Eat-fish-container">
        <BackArrow color={info.titleColor} />
        <LargeTextWithTitle info={info} />
        <ContentImages info={info} />
      </div>
    </div>
  );
};

export default Sustainability;
