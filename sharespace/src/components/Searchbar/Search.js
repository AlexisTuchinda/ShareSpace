import React from "react";
import {useState} from "react";
import "../../App.css";

import {connect, useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {search} from "../../store/actions/main";

function mapStateToProps(state){
    return {
        homepage: state.main.homepage
    }
}

function Search (props) {
    const [bar, setBar] = useState({
        searchbar: ""
    })


    const dispatch = useDispatch();

    //const [editAddOn, startPost] = useState(false);

    const changeBar = e => {
        setBar({
        ...bar,
        searchbar: e.target.value
        });
    };

    const submit = () =>{
        dispatch(search(bar, props.homepage));
    };

//console.log("In Posting...");

    return (
        <div>
            <div className = {"inputs"}>
                <input
                onChange={changeBar}
                value={bar.search}
                id="searchbar"
                placeholder = "Search Tags"
                />
                <button onClick={submit}>Search</button>
            </div>
        </div>
    );

        }


export default connect(mapStateToProps) (Search);