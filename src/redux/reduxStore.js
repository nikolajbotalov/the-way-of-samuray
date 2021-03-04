import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReduces';
import feedsReducer from './feedsReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  feedsPage: feedsReducer,
});

let store = createStore(reducers);

export default store;
