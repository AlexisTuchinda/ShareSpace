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
            bio: "HOLa",
        }

    }

    componentDidMount() {
        console.log(this.props.userId);
        this.props.getUserData(this.props.userId);
        console.log(this.props.userData);
    }


    pressed(e){
        // this.setState({username: ""})
    }

    data(){ 
        // let newPost = <Card username= {this.state.username} title = {"TEST"} votes = {0} isAuthenticated = {true} />;
        // this.setState({newPosts:[...this.state.newPosts, newPost]});
        if (this.props.userData){
            if (this.props.userData.followers != null && this.props.userData.following != null && this.props.userData.posts){
                return (
                    <div>
                        <h5>Followers: {this.props.userData.followers}, Following: {this.props.userData.following}, Posts: {this.props.userData.posts!="none" ? this.props.userData.posts.length : 0}</h5>
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
        userId: state.main.userId
        //isAuthenticated: state.main.isAutheticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //showCards: () => dispatch(actions.showCards())
        getUserData: (userId) => dispatch(actions.getUserData(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);