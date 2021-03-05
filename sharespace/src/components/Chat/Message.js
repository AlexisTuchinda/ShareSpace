import {React, useGlobalState} from "react";
import { useState } from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/actions";
import {sendMessage} from "../../store/actions";

function Message () {
    const [message, setMessage] = useState("");
    
    const dispatch = useDispatch();
    const[user, setState] = useGlobalState(userId)

    const changeMessage = e =>{
        setMessage(e.target.value);
    }

    const submit = () =>{
        //dispatch(addCard(props.userId, addOn));
        dispatch(sendMessage(message, user, new Date()));
    };

    return (
        <div>
            <div className = {"inputs"}>
                <input
                onChange={changeMessage}
                value={message}
                id="Message"
                placeholder = "Message"
                />
                <button onClick={submit}>Send</button>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        userId: state.main.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message, userId, timeSent) => dispatch(actions.sendMessage(message, userId, timeSent))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Message);