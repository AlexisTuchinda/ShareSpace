import * as actionTypes from "../actions/actiontypes";
import {updateObject} from "../utility";

const initialState = {
    isAuthenticated: false,
    userData: null,
    error: "",
    loggedIn: false,
    message: "",
    userID: null
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
        loggedIn: true,
        userID: action.userID
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

const test =(state, action) => {
    return updateObject(state, {
        message: action.word
    })
}

const auth = (state, action) => {return state};

const showCards = (state, action) => {return state};

const getUserData = (state, action) => {
    return updateObject(state, {
        userData: action.userData
    })
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.AUTH_SIGNUP_START): return startSignup(state, action);
        case(actionTypes.AUTH_SIGNUP_SUCCESS): return signupSuccess(state, action);
        case(actionTypes.AUTH_SIGNUP_FAIL): return signupFailed(state, action);
        case(actionTypes.AUTH_LOGOUT): return logout(state, action);
        case(actionTypes.AUTH): return auth(state, action);
        case(actionTypes.TEST): return test(state, action);
        case(actionTypes.SHOW_CARDS): return showCards(state, action);
        case(actionTypes.GET_USER_DATA): return getUserData(state, action);
        default: return state;
    }
}
export default reducer;