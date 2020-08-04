import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
//import {unregister} from "./serviceWorker";
import firebase from "firebase/app";
import mainReducer from "./store/reducers/main";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  main: mainReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const firebaseConfig = {
  apiKey: "AIzaSyDQ-GJqnsHpaRXdQzXLs7ABBjbpWjDR1XY",
  authDomain: "mural-db70d.firebaseapp.com",
  databaseURL: "https://mural-db70d.firebaseio.com",
  projectId: "mural-db70d",
  storageBucket: "mural-db70d.appspot.com",
  messagingSenderId: "721864886725",
  appId: "1:721864886725:web:5ce6fa6eb7b910c5cfe3ac",
  measurementId: "G-TY60LRSV8Q"
};
firebase.initializeApp(firebaseConfig);

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
);

ReactDOM.render(
  app, document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

serviceWorker.unregister();
