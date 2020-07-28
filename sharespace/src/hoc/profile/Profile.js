import React from "react";
import "./Profile.css";
import Card from "../../components/Cards/Card";
import "../home/Home.css";
import showCards from "../../components/showCards";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: props.username,
            name: props.name,
            bio: props.bio,
            followers: props.followers,
            following: props.following,
            posts: props.posts, //stored in server
            newPosts: [],
            upvotes: props.upvotes,
        }

        this.post = this.post.bind(this);
    }

    pressed(e){
        // this.setState({username: ""})
    }

    post(){ //append new posts to overall App storage 
        let newPost = <Card username= {this.state.username} title = {"TEST"} votes = {0} isAuthenticated = {true} />;
        this.setState({newPosts:[...this.state.newPosts, newPost]});
        //this.setState({posts:[...this.state.posts, newPost]})
    }

    render(){
        //change showCards.card to this.state.posts
        return(<div>
            <div>
                POST NEW STUFFS
                <button onClick = {this.post}>POST</button>
            </div>
            <div>
                {showCards({cards: this.state.newPosts})}
            </div>
            <div>
                SIDE COLUMN FOR FOLLOWERS, FOLLOWING, USERNAME, BIO, ETC.
            </div>
        </div>)
    }
}

export default Profile;