import React from "react";

const TextAndHeadline = props => {
  const text =
    props.text instanceof Array ? (
      props.text.map((item, key) => <p key={key}>{item}</p>)
    ) : (
      <p>{props.text}</p>
    );
  return (
    <div className={`${props.className} Section-text`}>
      <h4>{props.headline}</h4>
      {text}
    </div>
  );
};

export default TextAndHeadline;
