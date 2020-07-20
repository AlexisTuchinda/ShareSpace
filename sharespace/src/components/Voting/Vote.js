import React from "react";

class Vote extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            votes: 0
        };
    }

    checkUser(){
        return(
            <div>
                <h4>{this.state.votes} votes</h4>
                <button onClick = {() => this.setState({ votes: this.state.votes + 1 })}>VOTE</button>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.checkUser()}
            </div>
        )
    }
}

export default Vote;