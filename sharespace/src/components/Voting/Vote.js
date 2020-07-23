import React from "react";

class Vote extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            votes: 0,
            voters: [],
            currentUser: props.username
        };

        //this.checkUser = this.checkUser.bind(this);
    }

    checkUser(){
        if (!this.state.voters.some(item => this.state.currentUser === item)){
            return(
                <div>
                    <button onClick = {() => this.setState({ votes: this.state.votes + 1 }, this.setState({voters:[...this.state.voters, this.state.currentUser]}))}>VOTE</button>
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
                <ul>{this.state.votes} votes</ul>
                {this.checkUser()}
            </div>
        )
    }
}

export default Vote;