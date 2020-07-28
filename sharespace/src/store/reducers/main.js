const { startSignup } = require("../actions")

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.AUTH_SIGNUP_START): return startSignup(state, action);
        case(actionTypes.AUTH_SIGNUP_SUCCESS): return signupSuccess(state, action);
        case(actionTypes.AUTH_SIGNUP_FAIL): return signupFailed(state, action);
        case(actionTypes.AUTH_LOGOUT): return logout(state, action);
    }
}