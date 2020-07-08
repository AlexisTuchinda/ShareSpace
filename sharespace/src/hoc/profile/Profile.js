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

    componentDidMount(){
        // after loading

        this.setState({upvotes:this.state.upvotes+1})
    }

    componentWillMount(){
        // loading
    }

    componentDidUpdate(prev, next){
        // runs every frame
        // !

        if(prev.state.posts.length != next.state.posts.length){
            this.setState({posts:next.state.posts})
        }
    }

    componentWillUnmount(){
        // preresets, auto runs after leaving page
    }

    render(){
        return(<div>

        </div>)
    }
}

export default Profile;