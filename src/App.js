import React from 'react';
//import './App.css';
import { Route } from 'react-router-dom';
import { Home, Books, Electronics } from './pages/pages';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
      </header>
    </div>
  );
}

export default App;
