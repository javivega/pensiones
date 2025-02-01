import React from "react";
import "./Stepper.css";

function Stepper({activeIndex, length }) {
    return (
        <div className="steppers">
            {Array.from({ length }).map((_, index) => (
                <div key={index} className={index === activeIndex ? "stepper active" : "stepper"} />
            ))}
        </div>
    );
}

export default Stepper;