import React from "react";
import Comment from "./Comment";

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [<Comment username = {"TEST"} value= {"HELLO"}/>],
            username: props.username,
            commentInput: "",
            showComments: false
        };
        this.count = 1;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createNewComment(){
        let x = this.state.comments.filter(comment => comment.display);
        if (this.state.commentInput !== ""){
            this.state.comments[x.length+this.count] = <Comment username = {this.state.username} value =  {this.state.commentInput}/>
            this.count+=1;
        }
    }

    displayComments (){
        if (this.state.showComments){
            return(
                <div>
                    {this.state.comments.map((comment) => (<ul>{comment}</ul>))}
                </div>
            )
        }
    }

    handleChange(event) {
        this.setState({commentInput: event.target.value});
      }   
      
    handleSubmit(event){
        this.createNewComment();
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
                    <button onClick={()=>{this.state.showComments ? this.setState({showComments:false}) : this.setState({showComments:true})}}>OTHER COMMENTS</button>
                    {this.displayComments()}
                </div>
            </div>
        );
    }
}

export default CommentBox;