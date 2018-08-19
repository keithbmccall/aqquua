import React from "react";

const ContentLargeVideo = props => {
  const { info } = props;
  return (
    <div className="flex">
      <div className="Content-media flex-column flex-1 flex">
        <div className="media-video-holder">
          <iframe
            title='Aqquua'
            src={info.video}
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen="true"
          />
        </div>
      </div>
    </div>
  );
};
export default ContentLargeVideo;
