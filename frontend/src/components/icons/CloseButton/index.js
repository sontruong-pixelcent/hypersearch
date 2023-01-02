import React from "react";

const CloseButton = ({ color, hoverColor, ...props }) => {
  const [currentColor, setCurrentColor] = React.useState(
    color || "var(--white)"
  );
  return (
    <svg
      style={{ cursor: "pointer" }}
      width={26}
      height={26}
      fill="none"
      viewBox="0 0 32 32"
      onMouseEnter={() => setCurrentColor(hoverColor || "var(--green)")}
      onMouseLeave={() => setCurrentColor(color || "var(--white)")}
      {...props}
    >
      <path
        fill={currentColor}
        d="M5.092 3L29 26.908 26.908 29 3 5.092 5.092 3z"
        style={{ transition: "0.25s" }}
      />
      <path fill="#2FED1C" d="M17.8 15H15v2.796h2.8V15z" />
      <path
        fill={currentColor}
        d="M3 26.908L26.908 3 29 5.092 5.092 29 3 26.908z"
        style={{ transition: "0.25s" }}
      />
    </svg>
  );
};
export default CloseButton;
