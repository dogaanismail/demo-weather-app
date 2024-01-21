import React from "react";

const InputCity = ({ onSubmitHandler, city, onInputHandler }) => {
    return (
        <div className="input">
            <input
                type="text"
                placeholder="Enter City Name"
                value={city}
                onChange={onInputHandler}
            />
            <br />
            <button className="input-btn" type="submit" onClick={onSubmitHandler}>
                Search
            </button>
        </div>
    )
};

export default InputCity;