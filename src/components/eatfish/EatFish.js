import React from "react";
import WaveAnimation from "../../components/animations/WaveAnimation";
import BackArrow from "../../components/tools/images/BackArrow";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentList from "../tools/text/ContentList";
const EatFish = props => {
  const { info } = props;

  return (
    <div className="container">
      <div className="Eat-fish-container">
        <BackArrow color={info.titleColor} />
        <LargeTextWithTitle info={info} />
        <ContentList info={info} />
      </div>
    </div>
  );
};

export default EatFish;
