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
                await dispatch({type: actionTypes.GET_USER_DATA, userData: userData});
            }else{
                console.log("Failed to get Data");
            }
        });
    }
};

export const getUsername=(userId) => {
    let data, x;
    return async dispatch => {
        x = await firebase.database().ref("users/"+userId);
        await x.on('value', async (snapshot) => {
            data = snapshot.val();
            if (data.email){
                console.log("YES WORKING :)");
                return data.email;
            }else{
                return "YEah Dad";
            }
        })
    }
}

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

export const authSignupSuccess = (userData, userId) => {
    console.log(userData);
    return dispatch => {
        dispatch({type: actionTypes.AUTH_SIGNUP_SUCCESS,
        userData: userData,
    userId: userId});
    };
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
            formData.posts = []; //objects containing card data
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(response => {
                    var userId = firebase.auth().currentUser.uid;
                    //formData.userID = userId;
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
                                    dispatch(authSignupSuccess(userData, userId));
                                    return userData
                                } else {
                                    dispatch(authSignupSuccess('pending', userId));
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
                    //const expiryDate = await new Date (new Date ().getTime() + 36000);
                    let userRef = await firebase.database().ref('users/'+ userId);
                    await userRef.on('value', async (snapshot) => {
                        let userData= snapshot.val();
                        await dispatch(getCards(userId));
                        await dispatch(authSignupSuccess(userData, userId));
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

export const getCurrentCards = () =>{
    let x, users;
    let peeps = [];
    return (async dispatch => {
        x = await firebase.database().ref('users/');
        await x.on('value', async (snapshot) => {
            users = snapshot.val();
            console.log(users);
            if (users){
                Object.values(users).map((user) => {
                    console.log("Current Card user: ", user);
                    if (user.posts){
                        Object.values(user.posts).map((post) => {
                                console.log("IN POST:::: ", post)
                                peeps.push(post); 
                        })
                    }
                })
            }
            await Object.values(peeps).sort(function(a ,b) {
                return  b.votes - a.votes;
                });

            console.log(peeps);
            await dispatch({type: actionTypes.GET_CURRENT_CARDS, homepage: peeps});
        })
    })
}

export const getCards = (userId) => {
    let posts, x;
    return async dispatch => {
        x = await firebase.database().ref('users/'+ userId+"/posts");
        await x.on('value', async (snapshot) => {
            posts= snapshot.val();
            if (posts) {
                await dispatch({type: actionTypes.GET_USER_CARDS, posts});
                // console.log("getCards (actions) return posts: ", posts);
                // console.log("getCards (actions) return voters: ", posts.owner);
            }else{
                console.log("Failed to get Posts");
                await dispatch({type: actionTypes.GET_USER_CARDS, posts: null});
            }
        });
    }
}

export const addCard = (userId, card) =>{
    card.id =  Math.floor((Date.now()/1000 - 1530231260 ));
    card.owner = userId;
    card.name = firebase.auth().currentUser.email;
    
    let updates = {};
    updates["users/"+userId+'/posts/' + card.id] = card;
    
    firebase.database().ref().update(updates);

    return dispatch => {
        dispatch(getCards(userId))
    };
    
   }

export const updateCard = (voter,  userId, cardId, increment) =>{
    let updates = {};
    let card;
    return async dispatch => {
        console.log(userId, cardId)
        let cardRef = await firebase.database().ref("users/"+userId+'/posts/' + cardId);
        //console.log("CARD REF: ", cardRef);
        await cardRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            if (snapshot.val()) {
                card= snapshot.val();
                console.log("CARD: ", card);
                if (card && increment==null){
                    console.log("VOTES IN UPDATE: ", card.votes, card.voters);
                    card.votes = card.votes+1;
                    if (card.voters){
                        card.voters.push(voter);
                    }else{
                        card.voters = [voter];
                    }
                } else if (increment){
                    if (card.comments){
                        card.comments.push(increment);
                    }
                    else{
                        card.comments = [increment];
                    }
                }
            }
            updates["users/"+userId+'/posts/' + cardId] = card;
        })    
            //console.log("Updates: ", updates);
            await firebase.database().ref().update(updates);
            await dispatch(getCurrentCards());
        }
    };