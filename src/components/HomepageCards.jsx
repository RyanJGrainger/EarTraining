import React from "react";
import Cards from "../Cards"
import {Link} from 'react-router-dom';


var Card = props => {
    return <div className="container" >
            <div className="card" >

                <div className="imgBx">
                    <Link to="/chord-recognition">
                        <img src={props.cardImage} alt="img"/>
                    </Link>
                </div>

                <div className="contentBx" >

                    <h2 id={props.cssClass}>{props.cardName}</h2>

                    <div className="links">
                        <Link to="/chord-recognition">
                            <p id="levelUpLink">Level UP</p>
                        </Link>
                            <p id="practiceLink">listen</p>
                    </div>
                    
                </div>
            </div>
           </div>
}



var HomepageCards = () =>  <div className="animated fadeIn" id="cardsContainer">{Cards.map(Card)} </div>
    

export default HomepageCards;