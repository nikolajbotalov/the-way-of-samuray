import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { Header, NavBar, Profile, DialogsContainer, Music, Feeds, Settings } from './components';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        {/* <Route path="/profile" render={() => <Profile store={props.store} />} /> */}
        {/* <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} /> */}
        <Route path="/feeds" render={Feeds} />
        <Route path="/music" render={Music} />
        <Route path="/settings" render={Settings} />
      </div>
    </div>
  );
}

export default App;
