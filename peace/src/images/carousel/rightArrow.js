import React from "react";

const RightArrow = (props) => {
  const MarginRight = {
    marginRight: "-3px",
  };
  return (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={MarginRight}
      className="iconRight"
    >
      <path
        d="M1 1L9 8.34426L1 15"
        stroke={props.isEdge ? props.color : "black"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default RightArrow;
