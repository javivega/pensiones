import React from "react";
import "./Chip.css";

function Chip({ children, isActive}){
    return (
        <span className={`chip ${isActive ? "active" : ""}`}>
            {children}
        </span>
    );
}

export default Chip;