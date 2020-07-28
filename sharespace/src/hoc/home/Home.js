import React from "react";
import Card from "../../components/Cards/Card";
import showCards from "../../components/showCards";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "Dad",
            isAuthenticated: true,
            existingCards: [<Card username= {props.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {props.isAuthenticated} />,
            <Card username= {props.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {props.isAuthenticated} />] //connect to overall App storage thing
        }
    }

    render(){
        return(<div>
            {showCards({cards:  this.state.existingCards})}
        </div>)
    }
}

export default Home;