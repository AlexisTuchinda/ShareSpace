import React from "react";
import "./Home.css";
import Card from "../../components/Cards/Card";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "Dad",
            isAuthenticated: true
        }
    }

    render(){
        //get existing card information from database + store all created cards
        return(<div>
            <div className = "cardGrid">
                <Card username= {this.state.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {this.state.isAuthenticated} />
                <Card username= {this.state.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {this.state.isAuthenticated} />
            </div>
        </div>)
    }
}

export default Home;