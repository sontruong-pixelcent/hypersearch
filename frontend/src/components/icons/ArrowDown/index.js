import React from "react";

const ArrowDown = ({ color }) => (
  <svg width={28} height={14} fill="none" viewBox="0 0 28 14">
    <path
      fill={color || "#fff"}
      d="M0 2.392l14 10.745L28 2.392 26.165 0 14 9.334 1.835 0 0 2.392z"
    />
  </svg>
);

export default ArrowDown;
