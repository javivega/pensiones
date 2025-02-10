import React from "react";
import "./CardInfo.css";

function CardInfo({ title, description }) {
  return (
    <div className="card">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default CardInfo;