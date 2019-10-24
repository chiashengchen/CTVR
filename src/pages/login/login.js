import React from 'react';
import logo from './login.png';
import './login.css';
//import {AutoComplete} from 'antd';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
        <form className="box">BOX 範例</form>
        <div className="box button">BOX 範例</div>
        <h1>H1大小</h1>
        <h2>H2大小</h2>
        </div>
      </header>
    </div>
  );
}

export default Login;