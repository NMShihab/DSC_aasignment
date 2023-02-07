import React from "react";
import "./Left.css";

const Left = ({ image, height, width }) => {
  return (
    <div className="left-image-container">
      <img
        src={image}
        alt="left"
        style={{
          height: height ? height : "566px",
          width: width ? width : "390px",
        }}
      />
    </div>
  );
};

export default Left;
