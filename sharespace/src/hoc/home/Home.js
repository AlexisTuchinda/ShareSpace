import React from "react";
import "./Home.css";
import Card from "../../components/Cards/Card";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "Dad",
            isAuthenticated: false
        }
    }

    render(){
        //get existing card information from database + store all created cards
        return(<div>
            <Card username= {this.state.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {this.state.isAuthenticated} />
        </div>)
    }
}

export default Home;