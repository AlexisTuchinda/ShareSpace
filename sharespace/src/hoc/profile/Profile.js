import React from "react";
import "./Profile.css"
import Card from "../../components/Cards/Card";
import "../home/Home.css";

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
            tempPosts: [],
            upvotes: props.upvotes,
        }

        this.post = this.post.bind(this);
    }

    pressed(e){
        // this.setState({username: ""})
    }

    post(){ //change temp posts array
        this.setState({tempPosts:[...this.state.tempPosts, <Card username= {this.state.username} title = {"TEST"} votes = {0} isAuthenticated = {true} />]});
        
    }

    showPosts(){ //change temp posts array
        return(
            <div>
                {this.state.tempPosts.map((post, index) => (<li key = {index}>{post}</li>))}
            </div>
        )
    }

    render(){
        return(<div>
            <div>
                POST NEW STUFFS
                <button onClick = {this.post}>POST</button>
            </div>
            <div>
                <ul>{this.showPosts()}</ul>
            </div>
            <div>
                SIDE COLUMN FOR FOLLOWERS, FOLLOWING, USERNAME, BIO, ETC.
            </div>
        </div>)
    }
}

export default Profile;