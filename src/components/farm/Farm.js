import React from "react";
import BackArrow from "../tools/images/BackArrow";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentLargeVideo from "../tools/media/ContentLargeVideo";

const Farm = props => {
  const { info } = props;
  return (
    <div className="container">
      <div className="Farm-container">
        <BackArrow color={info.titleColor} />
        <LargeTextWithTitle info={info} />
        <ContentLargeVideo info={info} />
      </div>
    </div>
  );
};
export default Farm;
