import React from "react";
import WaveAnimation from "../../components/animations/WaveAnimation";
import BackArrow from "../tools/images/BackArrow";

const Farm = props => {
  const { info } = props;
  return (
    <div className="container">
      <WaveAnimation color="white" />
      <div className="Farm-container">
        <BackArrow color={info.titleColor} />
        <div className="flex Content-info-holder space-10">
          <div className="Content-info flex-column flex-1">
            <div>
              <h1 style={{ color: info.titleColor }}>
                {info.title.toUpperCase()}
              </h1>
              {info.caption.map((p, key) => <p key={key}>{p}</p>)}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="Content-media flex-column flex-1 flex">
            <div className="media-video-holder">
              <iframe
                title="placeholder"
                src="https://www.youtube.com/embed/NpEaa2P7qZI?rel=0&amp;controls=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Farm;
