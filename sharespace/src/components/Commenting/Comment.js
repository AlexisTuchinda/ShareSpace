import React, {useState} from "react";

function Comment(props){
    return(
        <div>
            <h4>{props.username} said:</h4>
            <h5>{props.value}</h5>
        </div>
    )
}

export default Comment;