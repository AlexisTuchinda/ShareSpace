import React from "react";
import { useState } from "react";
import "./Login.css";
//import ApiLogin from "./fake-api.json";
//import Home from "../home/Home"

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const [isLogged, setIsLogged] = useState(false);

  const changeUsername = e => {
    setLoginInfo({
      ...loginInfo,
      username: e.target.value
    });
  };

  const changePassword = e => {
    if (e.target.value[e.target.value.length - 1] !== "x") {
      setLoginInfo({
        ...loginInfo,
        password: e.target.value
      });
    }
  };

  const submit = () => {
    const userInformation = {
      ...loginInfo
    };
    if ("apple" === JSON.stringify(userInformation)) {
      setIsLogged(true);
    }
  };

  const logOut = () => {
    setIsLogged(false);
    setLoginInfo({
      ...loginInfo,
      username: "",
      password: ""
    });
  };

  return (
    <div className="Login">
      <input
        onChange={changeUsername}
        value={loginInfo.username}
        id="usernameInput"
      />
      <input
        onChange={changePassword}
        value={loginInfo.password}
        id="passwordInput"
      />
      <button onClick={submit}>LOGIN</button>
      <h2>{isLogged ? "LOGGED IN" : ""}</h2>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default Login;
