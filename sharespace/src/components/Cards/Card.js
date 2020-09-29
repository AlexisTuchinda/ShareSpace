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
            //data: props.post,
            title: props.title,
            username: props.email,
            image: props.image, //link
            id: props.id,
            description: props.description,
            isAuthenticated: this.props.loggedIn,
            votes: props.votes,
            voters: props.voters,
            voting: null,
            commenting: null,
            owner: props.owner
        };
    }

    //add tags for search

    componentDidMount(){
        //console.log("didmount votes: ", this.state.votes);
        this.setState({commenting: <CommentBox username = {this.props.userData.email} comments = {this.state.comments} cardId = {this.state.id}/>, voting: <Vote currentUser = {this.props.userId} votes = {this.state.votes} voters = {this.state.voters} id = {this.state.id} owner = {this.state.owner}/> });
    }

    render() {
        
        return (
            <div className = "card"> 
            {this.state.voters? <h1>WORKED</h1>:<h1>:(</h1>}
                <div>
                    <h1>{this.state.title} by {this.state.username}</h1>
                </div>
                <div>
                    <img src = {this.state.image}/>
                </div>
                <h4><b>{this.state.isAuthenticated  ? this.state.voting : "LOG IN TO VOTE"}</b></h4>
                <h4><b>{this.state.isAuthenticated ? this.state.commenting : "LOG IN TO COMMENT"}</b></h4>
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