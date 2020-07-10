import React from "react";
import "./Profile.css"

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: props.username,
            name: props.name,
            bio: props.bio,
            followers: props.followers,
            following: props.following,
            posts: props.posts,
            upvotes: props.upvotes
        }
    }

    render(){
        return(<div>
            Profile
        </div>)
    }
}

export default Profile;