

import { createStore, combineReducers, compose, applyMiddleware } from "redux";


import thunk from "redux-thunk";

const enhancers = [];
const middleware = [thunk];


let rootReducer = combineReducers({
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  ...enhancers
);

export default function generateStore() {
  const store = createStore(rootReducer, composedEnhancers);
  return store;
}
