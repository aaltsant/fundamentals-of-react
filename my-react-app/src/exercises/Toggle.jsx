import React, { useState } from "react";

const ToggleButton = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <button onClick={handleClick}>
            {clicked ? "ON" : "OFF"}
        </button>
    )
};

export default ToggleButton;
