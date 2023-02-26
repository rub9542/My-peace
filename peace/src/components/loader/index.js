import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner" aria-busy="true">
      <span className="bubble1"></span>
      <span className="bubble2"></span>
      <span className="bubble3"></span>
    </div>
  );
}
