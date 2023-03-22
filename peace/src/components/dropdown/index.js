import React from "react";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
export default function index({ options, placeholder, value, onChange }) {
  const handleDropOption = (e) => {
    onChange(e);
  };
  return (
    <Select
      defaultValue={value}
      onChange={handleDropOption}
      options={options || []}
      placeholder={placeholder || "Select the appointment"}
    />
  );
}
