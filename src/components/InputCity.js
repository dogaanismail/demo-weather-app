import React from "react";

const InputCity = ({ onSubmitHnadle, city, onInputHandler }) => {
    return (
        <div className="input">
            <input
                type="text"
                placeholder="Enter City Name"
                value={city}
                onChange={onInputHandler}
            />
            <br />
            <button className="input-btn" type="submit" onClick={onSubmitHnadle}>
                Search
            </button>
        </div>
    )
};

export default InputCity;