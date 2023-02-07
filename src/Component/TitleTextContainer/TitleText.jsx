import React from "react";
import "./TitleText.css";

const TitleText = ({ title1, title2, title3 }) => {
  return (
    <div className="title-text-container">
      <h1>{title1}</h1>
      <h1 className="title_2">{title2}</h1>
      <p>{title3}</p>
    </div>
  );
};

export default TitleText;
