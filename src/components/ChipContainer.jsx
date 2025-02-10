import React from "react";
import "./ChipContainer.css";
import Chip from "./Chip.jsx";
import { useState } from "react";

function ChipContainer({ chips, direction }) {
    const [isActive, setActive] = useState(0);

    const handleClick = (index) => {
        setActive(index);
    }

    const classContainer = direction === "horizontal" ? "chip-container horizontal" : "chip-container vertical";

    return (
        <div className={classContainer}>
            {chips.map((info, index) => (
                <Chip 
                    isActive={isActive === index}
                    onClick={() => handleClick(index)}
                    key={index}
                    chip={info.chip}
                    title={info.chip}
                    description={info.description}
                />
            ))}
        </div>
    );
}

export default ChipContainer;