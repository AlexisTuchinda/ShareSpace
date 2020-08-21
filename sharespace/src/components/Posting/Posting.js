import React from "react";
import "./Posting.css";
import {useState} from "react";

import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";


function Posting () {
    const [addOn, setAddOn] = ({
        description: "",
        title: "",
        image: "" //link only
    })
};

const dispatch = useDispatch();

const [editAddOn, startPost] = useState(false);

const changeDescription = e => {
    setAddOn({
      ...addOn,
      description: e.target.value
    });
  };

const changeTitle = e => {
setAddOn({
    ...addOn,
    title: e.target.value
});
};

const changeImage = e => {
setAddOn({
    ...addOn,
    image: e.target.value
});
};

const submit = () =>{
    dispatch(addCard(addOn));
};

return (
    <div>
        <button onClick = {() => {startPost(true)}}>Create Post</button>
        {(editAddOn)? <div>
            <input
            onChange={changeTitle}
            value={addOn.title}
            id="titleInput"
            placeholder = "Title"
            />
            <input
            onChange={changeImage}
            value={addOn.image}
            id="imageInput"
            placeholder = "Image URL"
            />
            <input
            onChange={changeDescription}
            value={addOn.description}
            id="descriptionInput"
            placeholder="Image Description"
            />
            <button onClick={submit}>Submit Post</button>
        </div> : null}
    </div>
);


export default Posting;