import React from 'react';

function ProgressCircle(props){

    return ( 
        <div class="animated fadeIn">
            <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                    stroke-dasharray="70, 100"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">70%</text>
            </svg>
        </div>
    );
}


export default ProgressCircle;


