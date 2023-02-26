import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function index({ options, placeholder, value, onChange }) {
  const handleDropOption = (e) => {
    onChange(e);
  };
  return (
    <Dropdown
      // options={options}
      // placeholder={placeholder || "Select the appointment"}
      value={value}
      onChange={handleDropOption}
      options={options || []}
      placeholder={placeholder || "Select the appointment"}
    />
  );
}
