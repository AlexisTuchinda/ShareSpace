import React from "react";
import Card from "../../components/Cards/Card";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import "./Home.css";
import Search from "../../components/Searchbar/Search";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //username: "Dad",
            /*
            existingCards: [<Card username= {props.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {props.isAuthenticated} />,
            <Card username= {props.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {props.isAuthenticated} />] //connect to overall App storage thing
            */
           cards: this.props.homepage
        }
    }

    componentWillMount(){
        
        //this.setState({cards: this.props.getCurrentCards()});
        //console.log("in Home did_mount");
        if (this.props.loggedIn){
            this.props.getCurrentCards();
        }
    }

    showCards(){
        if (this.props.searchResults){
            console.log("In Home: ", this.props.searchResults);
            return Object.values(this.props.searchResults).map((post, index) => {
                //console.log(index, post);
                return <Card key = {index} username = {post.name} title = {post.title} description = {post.description} image = {post.image} id = {post.id} votes = {post.votes} voters = {post.voters} comments = {post.comments} owner = {post.owner} tags = {post.tags}/>
            })
        } else if (this.state.cards){
            //console.log("POSTS: ", this.props.homepage)
            // console.log("POSTS LENGTH: ", Object.values(this.props.homepage).length);
            return Object.values(this.state.cards).map((post, index) => {
                //console.log(index, post);
                return <Card key = {index} username = {post.name} title = {post.title} description = {post.description} image = {post.image} id = {post.id} votes = {post.votes} voters = {post.voters} comments = {post.comments} owner = {post.owner} tags = {post.tags}/>
            })
        }
        else{
            return <div>No Posts! :(</div>
        }
    }

    render(){
        return(
            <div>
                <Search/>
                <div className = {"Scroll"}>
                    <div className = {"show"}>
                       {this.showCards()}
                        </div>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.main.userData,
 /*
        User data should contain email, account username, account password
 */
        searchResults: state.main.searchResults,
        homepage: state.main.homepage,
        isAutheticated: state.main.isAuthenticated,
        loggedIn: state.main.loggedIn,
        //message: state.main.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //test: () => dispatch(actions.test()),
        //logout: () => dispatch(actions.logout())
        getCurrentCards: () => dispatch(actions.getCurrentCards()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);