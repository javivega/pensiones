import React from "react";
import { useState } from "react";
import "./Chip.css";

import InfoContainer from "./InfoContainer.jsx";

function Chip({isActive, onClick, chip, title, description}){

    const getClassName = () => {
        let className = "chip";
        if (isActive && isHovered) {
            className += " active hovered";
        } else if (isActive) {
            className += " active";
        } else if (isHovered) {
            className += " hovered";
        }
        return className;
    };

    const [isHovered, setHovered] = useState(false);

    return (
        <div className="chip-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className={getClassName()}
                onClick={onClick}
            >
                {chip}
            </span>
            <InfoContainer title={title} description={description}
                isHovered={isHovered}
            />
        </div>
    )
}

export default Chip;