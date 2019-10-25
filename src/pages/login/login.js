import React from 'react';
import logo from './login.png';
import './login.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

//import {AutoComplete} from 'antd';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
        <form className="box">BOX 範例</form>
        <Link to="/datapass">
          <Button className="button" onClick={()=>{}}>
            GET 範例
          </Button>
        </Link>
        <Link to="/datapost">
          <Button className="button" onClick={()=>{}}>
            POST 範例
          </Button>
        </Link>
        <h1>H1大小</h1>
        <h2>H2大小</h2>
        </div>
      </header>
    </div>
  );
}

export default Login;