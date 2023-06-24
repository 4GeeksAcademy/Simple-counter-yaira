import React from "react";

const CountDown = (props) => {
    return(
    <div className="bg-light w-25 mx-auto mt-3 rounded p-3">
        <p className="text-center">Count Down Timer</p>
        <div className="text-center mb-2">0000</div>
        <input className="mb-2 mx-0" type="text" name="countDown"></input>
        <div className="d-flex align-items-start flex-row justify-content-center">    
            <button className="btn btn-success me-2" type="button" name="countDown">Start</button>
            <button className="btn btn-danger me-2" type="button" name="countDown">Stop</button>
            <button className="btn btn-warning me-2" type="button" name="countDown">Resume</button>
            <button className="btn btn-secondary" type="button" name="countDown">Reset</button>
        </div>

    </div>
    );
}



export default CountDown