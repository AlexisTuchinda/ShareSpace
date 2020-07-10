import React from "react";
import {useState} from "react";
import "./Card.css";

class Card extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            title = props.title,
            artist = props.user,
            image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2550%2F1*6d5dw6dPhy4vBp2vRW6uzw.png&imgrefurl=https%3A%2F%2Ftowardsdatascience.com%2Fpandas-groupby-aggregate-transform-filter-c95ba3444bbb&tbnid=-_NIe97rudDVsM&vet=12ahUKEwicj_PFyMHqAhWJop4KHWPdDz0QMygBegUIARDRAQ..i&docid=wSkn_oMXRKAgYM&w=1275&h=685&q=pandas&ved=2ahUKEwicj_PFyMHqAhWJop4KHWPdDz0QMygBegUIARDRAQ",
            votes = 0
        };
    }

    /*
    Separate components through Card:
    - Commenting
    - Voting/Likes
    */

    render() {
        return (
            <div> 
                <div>
                    <h1>{this.state.title}+" by "+{this.state.artist}</h1>
                </div>
                <div>
                    <img src = {this.state.image}/>
                </div>
                <div>
                    <h3>{this.state.votes}+" votes"</h3>
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}