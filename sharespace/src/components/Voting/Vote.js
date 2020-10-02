import React from "react";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";

class Vote extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentUser: props.currentUser,
            votes: props.votes,
            voters: props.voters,
            id: props.id,
            owner: props.owner
        };

        this.checkUser = this.checkUser.bind(this);
    }

    componentDidMount(){
        console.log(this.state.voters);
    }

    checkUser(){
        if ((this.state.voters && !(Object.values(this.state.voters).includes(this.state.currentUser))) || this.state.votes === 0){
            //console.log("checkUser: ", Object.values(this.state.voters).includes(this.props.userId), this.props.userId);
            return(
                <div>
                <button onClick = {() => this.props.updateCard(this.state.owner, this.state.id, null)}>VOTE</button>
                </div>
                )
            }
        else if (!this.state.voters){
            return(
                <div>
                       <h5><i>Voters have not loaded.</i></h5>
                        </div>         
            )
        }
        else{
            return(
                <div>
                       <h5><i>You have already voted on this artwork.</i></h5>
                        </div>         
            )
        }
    }

    render(){
        console.log(this.state.voters);
        return(
            <div>
                <ul>{this.state.votes}</ul>
                {this.checkUser()}
            </div>
        )
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
        updateCard: (userId, cardId, increment) => dispatch(actions.updateCard(userId, cardId, increment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Vote);