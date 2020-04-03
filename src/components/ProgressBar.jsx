import React from "react";

function ProgressBar(){
    return (
        <div className="progressBarContainer">
            <input type="radio" className="radio" name="progress" value="onehundred" id="twentyfive" checked/>
                     <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
         </div>

    );

}

export default ProgressBar;
