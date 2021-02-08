// import logo from './logo.svg';
import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { Header, NavBar, Profile, Dialogs, Music, Feeds, Settings } from './components';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} />}
        />
        <Route path="/feeds" render={Feeds} />
        <Route path="/music" render={Music} />
        <Route path="/settings" render={Settings} />
      </div>
    </div>
  );
}

export default App;
