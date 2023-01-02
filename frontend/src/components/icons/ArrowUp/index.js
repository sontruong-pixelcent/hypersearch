import React from "react";

const ArrowUp = ({ color }) => (
  <svg width={28} height={14} fill="none" viewBox="0 0 28 14">
    <path
      fill={color || "#fff"}
      d="M28 10.748L14 .003 0 10.748l1.835 2.392L14 3.806l12.165 9.334L28 10.748z"
    />
  </svg>
);

export default ArrowUp;
