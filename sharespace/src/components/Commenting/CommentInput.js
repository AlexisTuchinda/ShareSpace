import React, {useState, useEffect} from "react";

function CommentInput() {
    const [value, GetValue] = useState("");
    useEffect(() => {});
    return (
        <div>
            <input placeholder = {"COMMENT"} onChange = {(e) =>  GetValue(e.target.value)}></input>
        </div>
    );
}

export default CommentInput;