// import logo from './logo.svg';
import React from 'react';

import './App.css';

import { Header, NavBar, Profile } from './components';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
