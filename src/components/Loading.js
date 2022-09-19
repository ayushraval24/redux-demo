import React from "react";

export default function Loading() {
  return (
    <div
      className="spinner-border text-primary m-5"
      style={{ height: "100px", width: "100px" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
