import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './hoc/profile/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile username = {"whaleguy"} name = {"dude"} bio = {"hi"} followers = {"1M"} following = {1}/>
      </header>
    </div>
  );
}

export default App;
