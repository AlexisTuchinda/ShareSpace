import React,{useState} from "react";
import "../hoc/home/Home.css";

function showCards(props) {
    
    const cards = props.cards;
    const show = cards.map((card, index) => 
    <ul key = {index}>{card}</ul>
    );

    return <div className = "cardGrid">{show}</div>
};

export default showCards;