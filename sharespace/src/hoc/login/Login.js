import React from "react";
import { useState } from "react";
import "./Login.css";
//import ApiLogin from "./fake-api.json";
//import Home from "../home/Home"
import Signup from "../signup/Signup";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const [isLogged, setIsLogged] = useState(false);

  const [inSignup, enterSignup]  = useState({signup:null})

  const changeUsername = e => {
    setLoginInfo({
      ...loginInfo,
      username: e.target.value
    });
  };

  const submit = () => {
    const userInformation = {
      ...loginInfo
    };
    if ("apple" === JSON.stringify(userInformation)) {
      setIsLogged(true);
    }
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

//   const logOut = () => {
//     setIsLogged(false);
//     setLoginInfo({
//       ...loginInfo,
//       username: "",
//       password: ""
//     });
//   };

  return (
    <div className="outerContainer">
      <input
        onChange={changeUsername}
        value={loginInfo.username}
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
