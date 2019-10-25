import React from 'react';
import Login from './login/login';
import Datapass from './datapass/datapass';

/**
 * These are root pages
 */
const Home = () => {
  return <Login />;
};

const Books = () => {
  return <h1 className="py-3">Books</h1>;
};

const Electronics = () => {
  return <h1 className="py-3">Electronics</h1>;
};

/*const Data = () => {
  return <h1 className="py-3">Electronics</h1>;
};*/

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop, Datapass };
