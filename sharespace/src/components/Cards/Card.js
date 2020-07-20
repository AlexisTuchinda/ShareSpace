import React from "react";
import "./Card.css";
import CommentBox from "../Commenting/CommentBox";
import Vote from "../Voting/Vote";

class Card extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            title: props.title,
            username: props.username,
            image: "data:image/jpeg;base64,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",
            isAuthenticated: props.isAuthenticated,
            voting: <Vote/>,
            commenting: <CommentBox username = {props.username}/> //find way to sustain values of comments + votes for each card w/o reseting to null
        };
    }

    // componentWillMount(){
    //     this.checkAuthentication();
    // }

    // checkAuthentication(){ 
    //     if (this.state.isAuthenticated){
    //         return(
    //             <div>
    //                 {this.state.voting}
    //                 {this.state.commenting}
    //             </div>
    //         )
    //     }else{
    //         return <h2>LOG IN TO COMMENT AND VOTE</h2>
    //     }
    // }

    render() {
        return (
            <div> 
                <div>
                    <h1>{this.state.title} by {this.state.username}</h1>
                </div>
                <div>
                    <img src = {this.state.image}/>
                </div>
                <ul><b>{this.state.isAuthenticated ? this.state.voting : "LOG IN TO VOTE"}</b></ul>
                <ul><b>{this.state.isAuthenticated ? this.state.commenting : "LOG IN TO COMMENT"}</b></ul>
            </div>
        );
    }
}

export default Card;