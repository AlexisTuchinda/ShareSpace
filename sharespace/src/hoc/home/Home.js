import React from "react";
import Card from "../../components/Cards/Card";
import showCards from "../../components/showCards";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "Dad",
            isAuthenticated: true,
            /*
            existingCards: [<Card username= {props.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {props.isAuthenticated} />,
            <Card username= {props.username} title = {"Vardads!!!!"} votes = {0} isAuthenticated = {props.isAuthenticated} />] //connect to overall App storage thing
            */
        }
    }

    componentDidMount(){
        this.props.test();
    }

    render(){
        return(<div>
            <h2>{this.props.message}</h2>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.main.userData,
        isAutheticated: state.main.isAuthenticated,
        loggedIn: state.main.loggedIn,
        message: state.main.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        test: () => dispatch(actions.test()),
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);