import * as actionTypes from "../actions/actiontypes";
import {updateObject} from "../utility";

const initialState = {
    isAuthenticated: false,
    userData: null,
    error: "",
    loggedIn: false
}

const startSignup = (state, action) => {
    return updateObject(state, {
        userData: null,
        error: null,
        isAuthenticated: false,
        loggedIn: true
    })
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
    });
}

const auth = (state, action) => {return state};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.AUTH_SIGNUP_START): return startSignup(state, action);
        case(actionTypes.AUTH_SIGNUP_SUCCESS): return signupSuccess(state, action);
        case(actionTypes.AUTH_SIGNUP_FAIL): return signupFailed(state, action);
        case(actionTypes.AUTH_LOGOUT): return logout(state, action);
        case(actionTypes.AUTH): return auth(state, action);
        default: return state;
    }
}
export default reducer;