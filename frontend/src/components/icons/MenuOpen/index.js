import React from "react";

const MenuOpen = ({ color, alt }) => (
  <svg width={36} height={36} fill="none" viewBox="0 0 36 36" role="img">
    <title>{alt || "Open Menu"}</title>
    <path
      fill={color || "#fff"}
      d="M29 9.95H1v2.7h28v-2.7zm0 9.7H1v2.7h28v-2.7zm0 9.7H1v2.7h28v-2.7z"
    />
  </svg>
);

export default MenuOpen;
