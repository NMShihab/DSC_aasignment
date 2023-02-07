import React from "react";

const CustomButton = ({ text, type, onClick }) => {
  return (
    <div className="d-grid gap-2" onClick={onClick}>
      <button
        type={type}
        className="btn btn-primary"
        style={{ height: "60px", fontWeight: "600", fontSize: "18px" }}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
