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
            // title: props.title,
            // username: props.username,
            // image: props.image, //link
            // id: props.id,
            // description: props.description,
            // isAuthenticated: this.props.loggedIn,
            // votes: props.votes,
            // voters: props.voters,
            // owner: props.owner,
            // comments: props.comments,
            // tags: props.tags,
            voting: null,
            commenting: null
            
        };
    }

    //add tags for search

    componentDidMount(){
        //console.log("didmount votes: ", this.state.votes);
        this.setState({commenting: <CommentBox username = {this.props.userData.email} comments = {this.props.comments} cardId = {this.props.id}/>, voting: <Vote currentUser = {this.props.userId} votes = {this.props.votes} voters = {this.props.voters} id = {this.props.id} owner = {this.props.owner}/> });
    }

    description(){
        return (
            <div className = "description">
                <h4><i>{this.props.description}</i></h4>
            </div>
        );
    }

    render() {
        
        return (
            
            <div className = "card"> 
                <div>
                    <h1>{this.props.title} by {this.props.username}</h1>
                </div>
                <div>
                    <img src = {this.props.image}/>
                </div>
                <div className = "side">
                {this.description()}
                <h4><b>{this.props.loggedIn  ? this.state.voting : "LOG IN TO VOTE"}</b></h4>
                </div>
                <h4><b>{this.props.loggedIn ? this.state.commenting : "LOG IN TO COMMENT"}</b></h4>
                <h6><b>{this.props.tags}</b></h6>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.main.loggedIn,
        //message: state.main.message
        userData: state.main.userData,
        userId: state.main.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);