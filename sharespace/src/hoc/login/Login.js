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

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const [isLogged, setIsLogged] = useState(false);

  const [inSignup, enterSignup]  = useState({signup:null})

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
  };

  const changePassword = e => {
    setLoginInfo({
        ...loginInfo,
        password: e.target.value
      });
  }

  const startSignup = () => {
    enterSignup({
        ...inSignup,
        signup: <Signup/>
    })
  }

  return (
    <div className="outerContainer">
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
      <button onClick={submit}>LOGIN</button>
      <h2>{isLogged ? "LOGGED IN" : ""}</h2>
          <button onClick={startSignup}>Sign Up?</button>
          {inSignup.signup}
    </div>
  );
}

export default Login;