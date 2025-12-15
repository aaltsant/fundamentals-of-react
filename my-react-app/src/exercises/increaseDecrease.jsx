import React, { useState } from "react";

const IncreaseDecrease = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+ Increase</button>
            <button>Count: {count}</button>
            <button onClick={() => setCount(count - 1)}>- Decrease</button>
        </div>
        )
};

export default IncreaseDecrease;
