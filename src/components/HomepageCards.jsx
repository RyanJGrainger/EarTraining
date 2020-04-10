import React from "react";
import Cards from "../Cards"
import {Link} from 'react-router-dom';


var Card = props => {
    return <div class="container" >
            <div class="card" >

                <div class="imgBx">
                    <img src={props.cardImage} alt="img"/>
                </div>

                <div class="contentBx" >

                    <h2 id={props.cssClass}>{props.cardName}</h2>

                    <div class="links">
                        <Link to="/chord-recognition">
                            <p id="levelUpLink">Level UP</p>
                        </Link>
                            <p id="practiceLink">Practice</p>
                    </div>
                    
                </div>
            </div>
           </div>
}



var HomepageCards = () =>  <div className="animated fadeIn" id="cardsContainer">{Cards.map(Card)} </div>
    

export default HomepageCards;