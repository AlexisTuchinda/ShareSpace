import * as actionTypes from "./actiontypes";
import * as firebase from "../../fire";
import * as actions from "../actions";

export const authSignUpStart = () => {return{type:actionTypes.AUTH_SIGNUP_START}}

export const authSignUpSuccess = (userData) => {
    return dispatch => {
        dispatch({type: actionTypes.AUTH_SIGNUP_SUCCESS,
        userData: userData});
    };
}

export const authSignUpFail = (error) => {
    return dispatch => {
        dispatch({type: actionTypes.AUTH_SIGNUP_FAIL, error})
    };
}

export const auth = (formData, isNewSignUp) => {
    const email = formData.email;
    const password = formData.password;
    return dispatch => {
        if (isNewSignUp){
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(response => {
                    var userId = firebase.auth().currentUser.uid;
                    var userEmail = firebase.auth().currentUser.email;
                    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                        .then(async (idToken) => {
                            const expiryDate = await new Date (new Date ().getTime() + EXPIRES_IN * 1000);
                            let userRef = await firebase.database().ref('users/'+ userId);
                            await userRef.on('value', (snapshot) => {
                                if (snapshot.val()) {
                                    let userData= snapshot.val().userData || null;
                                    console.log('ACTIONS auth snapshot.val()', snapshot.val())
                                    dispatch(signupSuccess(userData));
                                    return userData
                                } else {
                                    dispatch(signupSuccess('pending'));
                                    return
                                }
                            })
                        })

                        .catch(function(error) {
                            // var errorCode = error.code;
                            var errorMessage = error.message;
                            dispatch(authSignUpFail(errorMessage));
                        
                    });
                });
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async response => {
                var userId = await firebase.auth().currentUser.uid;
                var userEmail = await firebase.auth().currentUser.email;
                await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                .then(async (idToken) => {
                    const expiryDate = await new Date (new Date ().getTime() + EXPIRES_IN * 1000);
                    let userRef = await firebase.database().ref('users/'+ userId);
                    await userRef.on('value', async (snapshot) => {
                        let userData= {...snapshot.val().userData};
                        await dispatch(signupSuccess(userData));
                        return userData;
                    });
                    await localStorage.getItem('token', idToken);
                    await dispatch(fetchAccount(userId));
                    await dispatch(checkAgreeTerms(userId));
                    await dispatch(emailToUsername(response.user.email));
                    //ADMIN STUFF --> if (response.user.email === 'alexis@tuchinda.com') { await dispatch(setAdmin()) }
                });
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    dispatch(authSignUpFail(errorMessage));
                    console.log('In actions errorCode', errorCode);
                    console.log('In actions errorMessage', errorMessage)
                });
        }
    }
}