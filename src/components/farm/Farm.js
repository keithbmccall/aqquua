import React from "react";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentLargeVideo from "../tools/media/ContentLargeVideo";

const Farm = props => {
  const { info } = props;
  return (
    <div className="container">
      <div className="Farm-container">
        <LargeTextWithTitle info={info} />
        <ContentLargeVideo info={info} />
      </div>
    </div>
  );
};
export default Farm;
