import React from "react";

const LeftArrow = (props) => {
  const MarginLeft = {
    marginLeft: "-3px",
  };
  return (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={MarginLeft}
      className="iconLeft"
    >
      <path
        d="M10 1L2 8.34426L10 15"
        stroke={!props.isEdge ? "black" : props.color}
        strokeOpacity="1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default LeftArrow;
