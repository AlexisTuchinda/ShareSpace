import React from "react";
import "./Card.css";
import CommentBox from "../Commenting/CommentBox";
import Vote from "../Voting/Vote";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";

class Card extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            title: props.title,
            username: props.username,
            image: props.image, //link
            description: props.description,
            isAuthenticated: this.props.loggedIn,
            voting: <Vote currentUser = {props.username}/>,
            commenting: <CommentBox username = {props.username}/> 
        };
    }

    //add tags for search

    render() {
        return (
            <div class = "card"> 
                <div>
                    <h1>{this.state.title} by {this.state.username}</h1>
                </div>
                <div>
                    <img src = {this.state.image}/>
                </div>
                <h4><b>{this.state.isAuthenticated ? this.state.voting : "LOG IN TO VOTE"}</b></h4>
                <h4><b>{this.state.isAuthenticated ? this.state.commenting : "LOG IN TO COMMENT"}</b></h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.main.loggedIn,
        //message: state.main.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);