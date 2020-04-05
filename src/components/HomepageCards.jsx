import React from "react";
import Cards from "../Cards"

var Card = props => {
    return <div class="container" >
            <div class="card" >
                <div class="imgBx">
                    <img src={props.cardImage} alt="img"/>
                </div>
                <div class="contentBx" >
                    <h2 id={props.cssClass}>{props.cardName}</h2>
                    <div class="description">
                        <p>{props.cardDescription}</p>
                    </div>
                </div>
            </div>
           </div>
}



var HomepageCards = () =>  <div className="animated fadeIn" id="cardsContainer">{Cards.map(Card)}</div>

    

export default HomepageCards;