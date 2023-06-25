
import React from "react";
import { render } from "react-dom/cjs/react-dom.production.min";

const SecondsCounter = (props) => {
    return(
        <div className="w-50 mx-auto mt-5 rounded">
        <div className="bg-light rounded">
            <p>{Math.floor(props.sec / 100000) % 10}</p>
            <p>{Math.floor(props.sec / 10000) % 10}</p>
            <p>{Math.floor(props.sec / 1000) % 10}</p>
            <p>{Math.floor(props.sec / 100) % 10}</p>
            <p>{Math.floor(props.sec / 10) % 10}</p>
            <p>{Math.floor(props.sec / 1) % 10}</p>
            <h5 className="card-title text-center mb-5 pb-2">Time since loaded</h5>
        </div>
    </div>
    );
}


export default SecondsCounter