import * as actionTypes from "./actiontypes";
import firebase from "firebase";
import * as actions from "../actions";
import React from "react";
import Card from "../../components/Cards/Card";

/* Getting data from firebase

let x = firebase.database().ref('users/'+ userId);
    await x.on('value', (snapshot) => {
        if (snapshot.val()) {
            let userData= snapshot.val();
        else{
            FAILED TO RETRIEVE DATA
                }
*/

export const getUserData = (userId) => {
    let userData, x;
    return async dispatch => {
        x = await firebase.database().ref('users/'+ userId);
        await x.on('value', async (snapshot) => {
            userData= snapshot.val();
            if (userData) {
                await dispatch({type: actionTypes.GET_USER_DATA, userData});
            }else{
                console.log("Failed to get Data");
            }
        });
    }
};

export const addData = (userId, data) => {
    let updates = {};
    let Ref;
    return async dispatch => {
        Ref = await firebase.database().ref('users/' + userId +"/"+ data.name);
        await Ref.on('value', async (snapshot)=>{
            let childSnapshot = snapshot.val();
            if (childSnapshot){
            data.amount = childSnapshot.amount+1;
            }
        });
        updates['users/' + userId + '/' + data.name] = data;
        await firebase.database().ref().update(updates);
        //await dispatch(otherFunction(userId));
   };
};

export const authSignupStart = () => {return{type:actionTypes.AUTH_SIGNUP_START}}

export const authSignupSuccess = (userData, isNew) => {
    console.log(userData);
    if (isNew){
        return dispatch => {
            dispatch({type: actionTypes.AUTH_SIGNUP_SUCCESS,
            userData: userData});
        };
    }
    else{
        return dispatch => {
            dispatch({type: actionTypes.AUTH_SIGNUP_SUCCESS,
            userData: userData});
        };
    }
}

export const authSignupFail = (error) => {
    return dispatch => {
        dispatch({type: actionTypes.AUTH_SIGNUP_FAIL, error})
    };
}

export const auth = (formData, isNewSignUp) => {
    const email = formData.email;
    const password = formData.password;
    console.log(email, password);
    return dispatch => {
        if (isNewSignUp){
            formData.followers = 0;
            formData.following = 0;
            formData.posts = "none"; //objects containing card data
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(response => {
                    var userId = firebase.auth().currentUser.uid;
                    var userEmail = firebase.auth().currentUser.email;

                    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                        .then(async (idToken) => {
                            const expiryDate = await new Date (new Date ().getTime() * 36000);
                            await firebase.database().ref('users/'+ userId).set(formData);
                            let userRef = firebase.database().ref('users/'+ userId);
                            await userRef.on('value', (snapshot) => {
                                if (snapshot.val()) {
                                    let userData= snapshot.val() || null;
                                    // console.log('ACTIONS auth snapshot.val()', snapshot.val())
                                    dispatch(authSignupSuccess(userData, isNewSignUp));
                                    return userData
                                } else {
                                    dispatch(authSignupSuccess('pending', isNewSignUp));
                                    return
                                }
                            })
                        })

                        .catch(function(error) {
                            // var errorCode = error.code;
                            var errorMessage = error.message;
                            dispatch(authSignupFail(errorMessage));
                        
                    });
                });
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async response => {
                var userId = await firebase.auth().currentUser.uid;
                var userEmail = await firebase.auth().currentUser.email;
                await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                .then(async (idToken) => {
                    const expiryDate = await new Date (new Date ().getTime() + 36000);
                    let userRef = await firebase.database().ref('users/'+ userId);
                    await userRef.on('value', async (snapshot) => {
                        let userData= {...snapshot.val().userData};
                        await dispatch(authSignupSuccess(userData, isNewSignUp));
                        return userData;
                    });
                    await localStorage.getItem('token', idToken);
                    // await dispatch(fetchAccount(userId));
                    // await dispatch(checkAgreeTerms(userId));
                    // await dispatch(emailToUsername(response.user.email));
                    //ADMIN STUFF --> if (response.user.email === 'alexis@tuchinda.com') { await dispatch(setAdmin()) }
                });
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    dispatch(authSignupFail(errorMessage));
                    console.log('In actions errorCode', errorCode);
                    console.log('In actions errorMessage', errorMessage)
                });
        }
    }
}

export const logout = () => {

}

export const showCards = (cards) => {
    // return <div>{cards.map((card, index) => 
    // <ul key = {index}>{card}</ul>)}</div>

    return <div>{cards.map((card, index) => 
    <ul key = {index}>
        <Card title = {card.title} username = {card.username} image = {card.image} description = {card.description}/>
    </ul>)}</div>
}

export const test = () => {
    let word = "Panda expresssssssss"
    firebase.database().ref("users/").set({
        randomness: word
    });
    return dispatch => {
        dispatch({type: actionTypes.TEST, word});
    };
}