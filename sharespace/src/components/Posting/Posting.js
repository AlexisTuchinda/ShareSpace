import React from "react";
import "./Posting.css";
import {useState} from "react";

import {connect, useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {addCard} from "../../store/actions/main";

function mapStateToProps(state){
    return {
        userId: state.main.userId
    }
}



function Posting (props) {
    const [addOn, setAddOn] = useState({
        description: "",
        title: "",
        image: "",
        votes: 0,
        voters: [],
        comments:[],
        tags: []
    })


    const dispatch = useDispatch();

    //const [editAddOn, startPost] = useState(false);

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

    const changeTags = e => {
        setAddOn({
            ...addOn,
            tags: e.target.value
        });
    };

    const changeImage = e => {
    setAddOn({
        ...addOn,
        image: e.target.value
    });
    };

    const submit = () =>{
        dispatch(addCard(props.userId, addOn));
        //console.log(props.userData);
    };

console.log("In Posting...");

    return (
        <div>
            <div className = {"inputs"}>
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
                onChange={changeTags}
                value={addOn.tags}
                id="tagInput"
                placeholder = "Tag"
                />
                <input
                onChange={changeDescription}
                value={addOn.description}
                id="descriptionInput"
                placeholder="Image Description"
                />
                <button onClick={submit}>Submit Post</button>
            </div>
        </div>
    );

        }


export default connect(mapStateToProps) (Posting);