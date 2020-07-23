import React, {useState} from "react";
import "./Comment.css";

function Comment(props){
    return(
        <div className = "comment">
            <h4>{props.username} said:</h4>
            <h5>{props.value}</h5>
        </div>
    )
}

export default Comment;