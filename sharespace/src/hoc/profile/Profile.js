import React from "react";
import "./Profile.css";
import Card from "../../components/Cards/Card";
import "../home/Home.css";
import showCards from "../../components/showCards";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import firebase from "firebase";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "TEST",
            bio: "HOLa"
        }

    }

    componentDidMount() {
        this.props.getUserData(this.props.userID);
    }


    pressed(e){
        // this.setState({username: ""})
    }

    data(){ 
        // let newPost = <Card username= {this.state.username} title = {"TEST"} votes = {0} isAuthenticated = {true} />;
        // this.setState({newPosts:[...this.state.newPosts, newPost]});

        if (this.props.followers && this.props.following && this.props.posts){
            return (
                <div>
                    <h5>Followers: {this.props.followers}, Following: {this.props.following}, Posts: {this.props.posts.length}</h5>
                </div>
            )
        }else{
            return(
                <div>
                    <h5>Data Loading...</h5>
                </div>
            )
        }
    }

    render(){
        //change showCards.card to this.state.posts
        return(<div>
            <div>
                <button onClick = {this.post}>POST</button>
            </div> 
            <div>
                {/*showCards({cards: this.state.newPosts})*/}
            </div>
            <div className = "userInfo">
        <h2>{this.state.username}</h2>
        <h4>{this.state.name}</h4>
        {this.data()}
        <h5>{this.state.bio}</h5>
            </div>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.main.userData,
        userID: state.main.userID
        //isAuthenticated: state.main.isAutheticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //showCards: () => dispatch(actions.showCards())
        getUserData: () => dispatch(actions.getUserData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);