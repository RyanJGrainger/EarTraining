import React from "react";
import Cards from "../Cards"
import {Link} from 'react-router-dom';
import DelayLink from 'react-delay-link';
import { useState } from 'react';


var Card = props => {
    return <div className="container" >
            <div className="card" >

                <div className="imgBx">
                    <DelayLink delay={500} to={props.link}>
                        <img src={props.cardImage} alt="img"/>
                    </DelayLink>
                </div>

                <div className="contentBx" >

                    <h2 id={props.cssClass}>{props.cardName}</h2>

                    <div className="links">
                            <p id="levelUpLink">Lvl UP</p>
                            <p id="practiceLink">listen</p>
                    </div>
                    
                </div>
            </div>
           </div>
}


function HomepageCards(){

    const [cardState, setCardState] = useState("animated bounceInUp")

    return(
        <div className={cardState} onClick={() => setCardState("animated bounceOutDown")} id="cardsContainer">{Cards.map(Card)} </div>
    )

}  
    

export default HomepageCards;