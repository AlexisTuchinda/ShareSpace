import React from "react";
import Comment from "./Comment";
import "./CommentBox.css";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            username: props.username,
            commentInput: "",
            showComments: false,
            cardId: props.cardId
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.displayComments = this.displayComments.bind(this);
    }

    createNewComment(){
        this.props.updateCard(null, this.props.userId, this.state.cardId, {username: this.state.username, value: this.state.commentInput})
    }

    displayComments(){
        //console.log(this.state.comments);
        if (this.state.showComments && this.state.comments){
            return(
                <ul className = "commentColumn">
                    {this.state.comments.map((comment, index) => (<li key = {index}><Comment username = {comment.username} value = {comment.value}/></li>))}
                </ul>
            )
        }
    }

    handleChange(event) {
        this.setState({commentInput: event.target.value});
      }   
      
    handleSubmit(event){
        this.createNewComment();
        this.setState({commentInput: ""})
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <label> 
                            <input type ="text" value = {this.state.commentInput} placeholder = {"COMMENT"} onChange ={this.handleChange}/>
                        </label>
                        <input type = "submit" value = "Submit"/>
                    </form>
                </div>
                <button onClick={()=>{this.state.showComments ? this.setState({showComments:false}) : this.setState({showComments:true})}}>{this.state.showComments ? "HIDE COMMENTS" :  "SHOW COMMENTS"}</button>
                <div className = "commentColumn">
                    {this.displayComments()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.main.userId
        //isAuthenticated: state.main.isAutheticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //showCards: () => dispatch(actions.showCards())
        updateCard: (voter, userId, cardId, increment) => dispatch(actions.updateCard(voter, userId, cardId, increment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommentBox);