import React from "react";
import PropTypes from "prop-types";

const TextAndHeadline = props => {
  const text =
    props.text instanceof Array ? (
      props.text.map((item, key) => <p key={key}>{item}</p>)
    ) : (
      <p>{props.text}</p>
    );
  const link = props.link ? (
    <a href={props.link}>
      <h4>{props.headline}</h4>
    </a>
  ) : (
    <h4>{props.headline}</h4>
  );
  return (
    <div className={`${props.className ? props.className : " "} Section-text`}>
      {link}
      {text}
    </div>
  );
};

export default TextAndHeadline;

TextAndHeadline.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).required,
  headline: PropTypes.string.required
};
