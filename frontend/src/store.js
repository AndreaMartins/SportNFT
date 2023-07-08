import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { competitorListReducer } from './reducers/competitorReducers.js';

// Reducers
const reducer = combineReducers({
  competitorList: competitorListReducer,
});

const preloadedState = {};

const store = configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
