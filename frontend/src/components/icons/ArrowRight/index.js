import React from "react";
import PropTypes from "prop-types";

const ArrowRight = ({ color }) => (
  <svg width={19} height={40} fill="none" viewBox="0 0 19 40">
    <path
      fill={color || "#fff"}
      d="M3.417 40l15.35-20L3.418 0 0 2.622 13.335 20 0 37.378 3.417 40z"
    />
  </svg>
);

export default ArrowRight;

ArrowRight.propTypes = {
  color: PropTypes.string,
};
