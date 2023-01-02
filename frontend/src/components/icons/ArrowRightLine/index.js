import React from "react";
import PropTypes from "prop-types";

const ArrowRightLine = ({ color, flip, style }) => {
  let useStyle = style || {};
  if (flip) {
    useStyle.transform = "rotate(180deg)";
  }
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      style={useStyle}
    >
      <path
        fill={color || "#fff"}
        d="M28.787 15.728L16.059 3 14 4.897l12.728 12.728 2.059-1.897z"
      />
      <path fill={color || "#fff"} d="M27 14.5H3v2.8h24v-2.8z" />
      <path
        fill={color || "#fff"}
        d="M26.728 14L14 26.728l2.059 1.897 12.728-12.727L26.727 14z"
      />
    </svg>
  );
};
export default ArrowRightLine;

ArrowRightLine.propTypes = {
  color: PropTypes.string,
  flip: PropTypes.bool,
};
