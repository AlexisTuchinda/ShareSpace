import React from "react";
import {useState} from "react";
import "./Card.css";

class Card extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            title = props.title,
            artist = props.user,
            image = props.url,
            votes = 0
        }
    }

    /*
    Separate components through Card:
    - Commenting
    - Voting/Likes
    */

    render() {
        return (
            //display title and creator
            <div>
                <h1>{this.state.title}+" by "+{this.state.artist}</h1>
            </div>
            //displays art; using link
            <div>
                <li><img src = {this.state.image}/></li>
            </div>
            //displays votes, allows users to vote
            <div>
                <h3>{this.state.votes}+" votes"</h3>
            </div>
        )
    }
}