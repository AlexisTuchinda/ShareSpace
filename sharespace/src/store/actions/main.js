import * as actionTypes from "./actions/actiontypes";
import * as firebase from "firebase";
import moment from "moment";
import {updateObject} from "../utility";

const initialState = {
    isAuthenticated: false,
    userData: null,
    error: "",
    loggedIn: false
}

const signupSuccess = (state, action) => {
    return updateObject(state, {
        userData: action.userData,
        error: null,
        isAutheticated: true,
        loggedIn: false
    });
}

const signupFailed = (state, action) => {
    return updateObject(state, {
        userData: null,
        error: action.error,
        isAutheticated: false,
        loggedIn: false
    });
}

const logout = (state, action) => {
    return updateObject(state, {
        userData: null,
        error: null,
        isAutheticated: false,
        loggedIn: false
    })
}