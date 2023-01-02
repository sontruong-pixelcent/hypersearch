import React from "react";
import PropTypes from "prop-types";

const ArrowLeft = ({ color }) => (
  <svg width={19} height={40} fill="none" viewBox="0 0 19 40">
    <path
      fill={color || "#fff"}
      d="M15.35 0L0 20l15.35 20 3.418-2.622L5.433 20 18.768 2.622 15.35 0z"
    />
  </svg>
);

export default ArrowLeft;

ArrowLeft.propTypes = {
  color: PropTypes.string,
};
