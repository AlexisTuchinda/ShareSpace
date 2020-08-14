import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./components/Navigation/Navigation";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "./store/actions";

export default function App() {
  
  return (
    <Navigation/>
  );
} 