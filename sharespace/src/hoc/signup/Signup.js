import React from "react";
import { useState } from "react";
import "../login/Login.css";


function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: ""
  });

  const [result, setResult] = useState({result:null});

  const [isSignedup, setIsLogged] = useState(false);

  const changeUsername = e => {
    setSignupInfo({
      ...signupInfo,
      username: e.target.value
    });
  };

  const checkValidity = (value) => {
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return (emailPattern.test(value));
  };

  const submit = () => {
    if (checkValidity(signupInfo.username) && signupInfo.password.length > 6){
        //do auth from redux

        setResult({
            ...result,
            result: (<div>
                <h1>Success.</h1>
            </div>)
        });
    }else{
        setResult({
            ...result,
            result: (<div>
                <h1>Not valid email.</h1>
            </div>)
        });
    }
    const userInformation = {
    ...signupInfo
    };
  };

  const changePassword = e => {
    setSignupInfo({
        ...signupInfo,
        password: e.target.value
      });
  }

  return (
    <div >
      <input
        onChange={changeUsername}
        value={signupInfo.username}
        id="usernameInput"
        placeholder="Username (Email)"
      />
      <input
        onChange={changePassword}
        value={signupInfo.password}
        id="passwordInput"
        placeholder = "Password"
      />
      <button onClick={submit}>SIGN UP</button>
      <h2>{isSignedup ? "SIGNED UP" : ""}</h2>
      {result.result}
    </div>
  );
}

export default Signup;
