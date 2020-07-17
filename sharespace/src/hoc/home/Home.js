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
        return(<div>
            <Card username= {this.state.username} title = {"Vardads!!!!"} isAuthenticated = {this.state.isAuthenticated} />
        </div>)
    }
}

export default Home;