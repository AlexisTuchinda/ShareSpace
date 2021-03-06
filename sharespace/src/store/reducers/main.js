import * as actionTypes from "../actions/actiontypes";
import {updateObject} from "../utility";
import { search } from "../actions";

const initialState = {
    isAuthenticated: false,
    userData: null,
    error: "",
    loggedIn: false,
    message: "",
    userId: null,
    posts: [],
    homepage: [],
    searchResults: [],
    chat: []
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
    //console.log("getUserData return :", action.userData)
    return updateObject(state, {
        userData: action.userData
    })
};

const getCards = (state, action) => {
    //console.log("getCards (reducer) return posts: ", action.posts);
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
    //console.log("getCurrentCards HOMEPAGE: ", action.homepage);
    console.log("getCurrentCards: ", action.homepage);
    return updateObject(state, {
        homepage: action.homepage
    })
}

const searchResults = (state, action) => {
    return updateObject(state, {
        searchResults: action.searchResults
    })
}

const updateChat = (state,action) =>{
    return updateObject(state, {
        chat: action.message
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
        case(actionTypes.SEARCH): return searchResults(state, action);
        case(actionTypes.UPDATE_CHAT): return updateChat(state, action);
        default: return state;
    }
}
export default reducer;