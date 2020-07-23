import React from "react";
import Comment from "./Comment";
import "./CommentBox.css";

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [<Comment username = {"TEST"} value = {"COMMENT"}/>],
            username: props.username,
            commentInput: "",
            showComments: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.displayComments = this.displayComments.bind(this);
    }

    createNewComment(){
        this.setState({comments:[...this.state.comments, <Comment username = {this.state.username} value = {this.state.commentInput}/>]}); 
    }

    displayComments(){
        if (this.state.showComments){
            return(
                <div class = "commentColumn">
                    {this.state.comments.map((comment, index) => (<li key = {index}>{comment}</li>))}
                </div>
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
                <div>
                    <button onClick={()=>{this.state.showComments ? this.setState({showComments:false}) : this.setState({showComments:true})}}>{this.state.showComments ? "HIDE COMMENTS" :  "SHOW COMMENTS"}</button>
                    {this.displayComments()}
                </div>
            </div>
        );
    }
}

export default CommentBox;