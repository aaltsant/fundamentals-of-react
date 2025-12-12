import React, { useState } from "react";

function NameForm() {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = () => {
        if (input.trim() !== '') {
            alert(`Hei, ${input}! Tervetuloa oppimaan Reactia`);
        } else {
            alert(`Kirjoita ensin nimesi!`);
        }

        setInput('');
    };


    return (
        <div>
            <input
                type = "text"
                placeholder="Kirjoita nimesi tähän..."
                value={input}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default NameForm;
