import React from 'react';
//import './App.css';
import { Route } from 'react-router-dom';
import { Loginpage, Books, Electronics, Datapass } from './pages/pages';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" exact component={Loginpage} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
        <Route path="/datapass" component={Datapass} />
      </header>
    </div>
  );
}

export default App;
