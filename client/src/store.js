// this is the entry file of the REDUX

import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { getAllFoodsReducers } from "./reducers/foodReducers";

const finalReducer = combineReducers({
  getAllFoodsReducers: getAllFoodsReducers,
});

const initialState = {};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
