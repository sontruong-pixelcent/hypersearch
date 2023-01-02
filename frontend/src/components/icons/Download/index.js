import React from "react";
import PropTypes from "prop-types";

const Download = ({ color }) => (
  <svg width={32} height={32} fill="none" viewBox="0 0 32 32">
    <path
      fill={color || "#fff"}
      d="M12 23.308V3H9.2v20.308H12zM20.858 27H.55v2.8h20.308V27z"
    />
    <path
      fill={color || "#fff"}
      d="M10.728 24.82l10.77-10.77-1.898-2.06L8.83 22.76l1.898 2.06z"
    />
    <path
      fill={color || "#fff"}
      d="M12.667 22.77L1.897 12 0 14.059l10.77 10.77 1.897-2.06z"
    />
  </svg>
);

export default Download;

Download.propTypes = {
  color: PropTypes.string,
};
