import React from "react";
import "./Profile.css";
import Card from "../../components/Cards/Card";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import Posting from "../../components/Posting/Posting";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bio: "BIO HERE",
            newPost: null
        }

    }

    componentDidMount() {
        this.props.getUserData(this.props.userId);
        this.props.getCards(this.props.userId);
    }

    displayPosts(){
        if (this.props.posts){
            //console.log(this.props.posts);
            return Object.values(this.props.posts).map((post) => {
                console.log("Profile: ", post.comments)
                //console.log("displayPosts: ", post.voters);
                return <Card id = {post.id} title = {post.title} username= {post.name} image = {post.image} description = {post.description} votes = {post.votes} voters = {post.voters} comments = {post.comments} owner = {post.owner} tags = {post.tags}/>
            })
        }
    }


    data(){ 
        // let newPost = <Card username= {this.state.username} title = {"TEST"} votes = {0} isAuthenticated = {true} />;
        // this.setState({newPosts:[...this.state.newPosts, newPost]});
        //console.log(this.props.posts);
        if (this.props.userData){
            if (this.props.userData.followers != null && this.props.userData.following != null && this.props.posts){
                return (
                    <div>
                        <h5>Followers: {this.props.userData.followers}</h5>
                        <h5>Following: {this.props.userData.following}</h5>
                        {this.props.posts ? <h5>Posts: {Object.values(this.props.posts).length}</h5> : <h5>Posts: 0</h5>}
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
            {/*this.state.newPost ? <div><Posting/></div> : <div><button onClick = {() => }></div>*/}
            <div className = {"userInfo"}>
        <h2>{this.state.username}</h2>
        <h3>{(this.props.userData) ? this.props.userData.email : ":)"}</h3>
        {this.data()}
        <h5>{this.state.bio}</h5>
            </div>
        
            <div>
                <button onClick = {() => {this.setState({newPost: <Posting/>})}}>NEW POST</button>
                {this.state.newPost || null}
            </div>
            <div className = {"container"}>
                {this.displayPosts()}
            </div>
            </div>
            )
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.main.userData,
        userId: state.main.userId,
        posts: state.main.posts
        //isAuthenticated: state.main.isAutheticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //showCards: () => dispatch(actions.showCards())
        getUserData: (userId) => dispatch(actions.getUserData(userId)),
        getCards: (userId) => dispatch(actions.getCards(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);