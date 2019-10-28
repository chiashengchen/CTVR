import React from 'react';
import logo from './login.png';
import './login.css';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

//import {AutoComplete} from 'antd';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
        <h3>ID後六位</h3>
        <Input className="box"></Input>
        <h3>登入密碼</h3>
        <Input className="box"></Input>
        <h3>記住密碼</h3>
        <Link to="/datapass">
          <Button className="button" onClick={()=>{}}>
            登入
          </Button>
        </Link>
        <br />
        </div>
      </header>
    </div>
  );
}

export default Login;