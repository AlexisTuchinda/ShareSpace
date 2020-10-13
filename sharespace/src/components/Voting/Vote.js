import React from "react";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";

class Vote extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            update: 0,
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
        this.props.getCurrentCards();
    }

    checkUser(){
        console.log("CheckUser() - currentUser: ", this.state.currentUser, "; this.state.owner: ", this.state.owner, "; card Id: ", this.state.id);
        if (this.state.voters) {
            if ((!(Object.values(this.state.voters).includes(this.state.currentUser)) && this.state.currentUser!==this.state.owner)){
                
                // console.log("Past checkUser()");
                return(
                    <div>
                    <button onClick = {() => {this.props.updateCard(this.props.userId, this.state.owner, this.state.id, null); this.setState({update: Math.random()})}}>VOTE</button>
                    </div>
                )
            }
            //console.log("checkUser: ", Object.values(this.state.voters).includes(this.props.userId), this.props.userId);
            
            else{
                return(
                    <div>
                        <h5><i>You have already voted on this artwork.</i></h5>
                            </div>         
                )
            }

        }else if (this.state.currentUser!==this.state.owner){
            return(
                <div>
                <button onClick = {() => this.props.updateCard(this.props.userId, this.state.owner, this.state.id, null)}>VOTE</button>
                </div>
            )
        }
        // else if (!this.state.voters){
        //     return(
        //         <div>
        //                <h5><i>Voters have not loaded.</i></h5>
        //                 </div>         
        //     )
        // }
    }

    render(){
        // if (this.state.voters){
        //     console.log(this.state.id, "_Object: ", (!(Object.values(this.state.voters).includes(this.state.currentUser))));
        //     console.log("currentUser: ", this.state.currentUser, "; userID: ", this.props.userId);
        //     console.log(this.state.id, "_Owner: ", this.state.currentUser!==this.state.owner);
        // }
        return(
            <div className = "side">
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
        updateCard: (userId, cardId, increment) => dispatch(actions.updateCard(userId, cardId, increment)),
        getCurrentCards: () => dispatch(actions.getCurrentCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Vote);