import React from "react";
import "./Chat.css";
import Message from "./Message"
import Comment from "../Commenting/Comment";

import {connect} from "react-redux";
// import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";

class Chat extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            history: this.props.chat
        };
    }

    componentWillMount(){

    }


    componentDidMount(){
        this.props.updateChat();
        this.setState({history: this.props.chat})
        }

    displayHistory(){
        //sent has time, userId of sender, and message
        if (this.state.history){
            return(
                <ul className = "history">
                    {this.state.history.map((sent, index) => (
                    <li key = {index}><Comment username = {sent.sender} value = {sent.message}/></li>
                    ))}
                </ul>
            )
        }
    }

    render() {
        
        return (
            //chat history (scroll)
            //chat input/send at bottom

            <div className = "chatBox">
                
                <Message/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chat: state.main.chat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateChat: () => dispatch(actions.updateChat())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Chat);