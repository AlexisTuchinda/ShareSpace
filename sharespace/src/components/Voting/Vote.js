import React from "react";

class Vote extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            votes: 0,
            voters: [],
            currentUser: props.username
        };

        this.count = 0;
    }

    checkUser(){
        if (!this.state.voters.some(item => this.state.currentUser === item)){
            let y = this.state.voters.filter(comment => comment.display);
            this.state.voters[y.length+this.count] = this.state.currentUser;
            this.count+=1;
            return(
                <div>
                    <button onClick = {() => this.setState({ votes: this.state.votes + 1 })}>VOTE</button>
                </div>
            )
        } else{
            return(
            <div>
                <h5><i>You have already voted on this artwork.</i></h5>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <h4>{this.state.votes} votes</h4>
                {this.checkUser()}
            </div>
        )
    }
}

export default Vote;