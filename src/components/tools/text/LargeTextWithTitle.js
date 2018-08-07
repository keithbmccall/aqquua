import React from "react";
import HeadlineAnimation from "../../animations/HeadlineAnimation";

const LargeTextWithTitle = props => {
  const { info } = props;
  return (
    <div className="flex Content-info-holder collapse-row-column-tab">
      <div className="Content-info  flex-1">
        <div>
          <HeadlineAnimation>
            <h1 style={{ color: info.titleColor }}>
              {info.title.toUpperCase()}
            </h1>
          </HeadlineAnimation>
          {info.subTitle && <h2>{info.subTitle}</h2>}
          {info.caption.map((p, key) => <p key={key}>{p}</p>)}
        </div>
      </div>
      <div className="Content-info-image flex-1">
        <img src={props.image} className="image" />
      </div>
    </div>
  );
};
export default LargeTextWithTitle;
