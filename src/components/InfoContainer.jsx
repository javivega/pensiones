import React from "react";
import "./InfoContainer.css";

function InfoContainer({title, description, isHovered}) {

    const getClassName = () => {
        let className = "info-container--container";
        if (description === "") {
            className+="";
        }
        if (isHovered && description != null) {
            className += " active";
        }
        return className;
    }


    return (
        <div className={getClassName()}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default InfoContainer;