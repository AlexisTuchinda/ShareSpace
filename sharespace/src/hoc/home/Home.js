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
        //get existing card information from database
        return(<div>
            <Card username= {this.state.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {this.state.isAuthenticated} /> 
        </div>)
    }
}

export default Home;