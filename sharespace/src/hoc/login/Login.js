import React from "react";
import { useState } from "react";
import "./Login.css";
//import ApiLogin from "./fake-api.json";
//import Home from "../home/Home"
import Signup from "../signup/Signup";

import {connect, useDispatch} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import {auth} from "../../store/actions";
import Logo from "../../res/Mural_Logo.png";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const [isLogged, setIsLogged] = useState(false);

  const [isSignup, enterSignup]  = useState(false)

  const [buttonTxt, changeTxt] = useState("Open Signup")
;
  const changeUsername = e => {
    setLoginInfo({
      ...loginInfo,
      email: e.target.value
    });
  };

  const submit = () => {
    // const userInformation = {
    //   ...loginInfo
    // };
    dispatch(auth(loginInfo, false));
    // if (props.loggedIn){
    //props.history.push("/profile");
    // }
  };

  const changePassword = e => {
    setLoginInfo({
        ...loginInfo,
        password: e.target.value
      });
  }

  return (
  <div className = {"pageContainer"}>

    <div className={"outerContainer"}>
    <div className = {"logo"}>
    <img src = {Logo}/>
      </div>
      <div className = {"x"}>
        <input
          onChange={changeUsername}
          value={loginInfo.email}
          id="usernameInput"
          placeholder="Username"
        />
        <input
          onChange={changePassword}
          value={loginInfo.password}
          id="passwordInput"
          placeholder = "Password"
        />
        </div>
        <button onClick={submit}>LOGIN</button>
        <h2>{isLogged ? "LOGGED IN" : ""}</h2>
      
      <button onClick = {()=>{enterSignup(!isSignup); if (isSignup) {changeTxt("Open Signup")} else{changeTxt("Close Signup")}}}>{buttonTxt}</button>
      {isSignup? <Signup/> : null}
    </div>
  </div>
  );
}

function mapStateToProps(state){
  return {
    loggedIn: state.main.loggedIn
  }
}

function mapDispatchToProps(state){
  return{
    
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Login));