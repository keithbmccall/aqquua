import React from "react";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentList from "../tools/text/ContentList";
import ContentLargeVideo from "../tools/media/ContentLargeVideo";
const EatFish = props => {
  const { info } = props;

  return (
    <div className="container">
      <div className="Eat-fish-container">
        <LargeTextWithTitle info={info} />
        {/* <ContentList info={info} /> */}
        <ContentLargeVideo info={info} />
      </div>
    </div>
  );
};

export default EatFish;
