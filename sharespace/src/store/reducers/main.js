import * as actionTypes from "../actions/actiontypes";
import {updateObject} from "../utility";

const initialState = {
    isAuthenticated: false,
    userData: null,
    error: "",
    loggedIn: false,
    message: "",
    userId: null,
    posts: [],
    homepage: []
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
        userId: action.userId
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

//const showCards = (state, action) => {return state};

const getUserData = (state, action) => {
    return updateObject(state, {
        userData: action.userData
    })
};

const getCards = (state, action) => {
    return updateObject(state, {
        posts: action.posts
    })
};

const addCard = (state, action) => {
    return state
}

const updateCard = (state, action) => {
    return state
}

const getCurrentCards = (state, action) => {
    console.log("getCurrentCards HOMEPAGE: ", action.homepage);
    return updateObject(state, {
        homepage: action.homepage
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.AUTH_SIGNUP_START): return startSignup(state, action);
        case(actionTypes.AUTH_SIGNUP_SUCCESS): return signupSuccess(state, action);
        case(actionTypes.AUTH_SIGNUP_FAIL): return signupFailed(state, action);
        case(actionTypes.AUTH_LOGOUT): return logout(state, action);
        case(actionTypes.AUTH): return auth(state, action);
        case(actionTypes.TEST): return test(state, action);
        case(actionTypes.GET_USER_DATA): return getUserData(state, action);
        case(actionTypes.GET_USER_CARDS): return getCards(state, action);
        case(actionTypes.ADD_CARD_TO_CURRENTS): return addCard(state, action);
        case(actionTypes.UPDATE_CARD): return updateCard(state, action);
        case(actionTypes.GET_CURRENT_CARDS): return getCurrentCards(state, action);
        default: return state;
    }
}
export default reducer;