import React from "react";

const Search = ({ color, alt, hoverColor }) => {
  const [theColor, setTheColor] = React.useState(color || "#fff");
  return (
    <svg
      width={36}
      height={36}
      fill="none"
      viewBox="0 0 36 36"
      role="img"
      onMouseEnter={() => {
        setTheColor(hoverColor || color || "#fff");
      }}
      onMouseLeave={() => {
        setTheColor(color || "#fff");
      }}
    >
      <title>{alt || "Search"}</title>
      <path
        fill={theColor}
        d="M22.954 25.612l8.06 8.061-1.912 1.906-8.061-8.061z"
      />
      <circle
        cx={13.903}
        cy={18.903}
        r={11.653}
        stroke={theColor}
        strokeWidth={2.5}
      />
    </svg>
  );
};

export default Search;
