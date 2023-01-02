import React from "react";

const MenuClose = ({ color }) => (
  <svg width={32} height={32} fill="none" viewBox="0 0 32 32">
    <path
      fill={color || "#fff"}
      d="M5.092 3L29 26.908 26.908 29 3 5.092 5.092 3z"
    />
    <path fill={color || "#fff"} d="M17.8 15H15v2.796h2.8V15z" />
    <path
      fill={color || "#fff"}
      d="M3 26.908L26.908 3 29 5.092 5.092 29 3 26.908z"
    />
  </svg>
);

export default MenuClose;
