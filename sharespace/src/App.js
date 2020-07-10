import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './hoc/profile/Profile'
import Home from './hoc/home/Home'
import Login from './hoc/login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div class = "navigation"> 
            <ul>
              <li>
                <Link to="/" style = {{textDecoration: "none", color: "#a9a1ab", fontSize: 20, fontFamily: "Rubik"}} >Home</Link>
              </li>
              <li>
                <Link to="/profile" style = {{textDecoration: "none", color: "#a9a1ab", fontSize: 20, fontFamily: "Rubik"}} >Profile</Link>
              </li>
              <li>
                <Link to="/login" style = {{textDecoration: "none", color: "#a9a1ab", fontSize: 20, fontFamily: "Rubik"}} >Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function HomePage() {
  return <Home/>;
}

function ProfilePage() {
  return <Profile/>;
}

function LoginPage() {
  return <Login/>;
}