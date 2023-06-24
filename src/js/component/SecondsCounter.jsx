
import React from "react";

const SecondsCounter = (props) => {
    return(
        <div className="w-50 mx-auto mt-5 rounded">
        <div className="bg-light rounded">
            <p className="bg-dark text-white text-center p-2 rounded fs-1 text"><i class="fa fa-clock me-2"></i>{timer}</p>
            <h5 className="card-title text-center mb-5 pb-2">Time since loaded</h5>
        </div>
    </div>
    );
}

const timer = setInterval(() => {
    
}, 1000);

export default SecondsCounter