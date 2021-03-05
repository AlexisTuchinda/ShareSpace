import React from "react";
import Card from "../../components/Cards/Card";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import "./Home.css";
import Search from "../../components/Searchbar/Search";
import Chat from "../../components/Chat/Chat";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           cards: this.props.homepage
        }
    }

    componentDidMount(){
        
        if (this.props.loggedIn){
            this.props.getCurrentCards();
        }
    }

    showCards(){
        //onsole.log(this.state.cards);
        if (this.props.searchResults.length >0){
            console.log("In Home: ", this.props.searchResults);
            return Object.values(this.props.searchResults).map((post, index) => {
                console.log("DISPLAYING SEARCH: ", index, post);
                return <Card key = {index} username = {post.name} title = {post.title} description = {post.description} image = {post.image} id = {post.id} votes = {post.votes} voters = {post.voters} comments = {post.comments} owner = {post.owner} tags = {post.tags}/>
            })
        } else if (this.state.cards){
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
                <Chat/>
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