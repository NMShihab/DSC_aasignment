import React from "react";
import "./Left.css";

const Left = ({ image }) => {
  return (
    <div className="left-image-container">
      <img src={image} alt="left" />
    </div>
  );
};

export default Left;
