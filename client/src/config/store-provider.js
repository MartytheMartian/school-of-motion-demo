import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';

import Resolution from "../constants/resolution";
import rootReducer from '../state/reducers';

// Configure the store.
export default function ({ children }) {
  // Is the environment production.
  const production = process.env.NODE_ENV === "production";

  // Setup middlewares for Redux.
  const middleware = [ReduxThunk];

  // Build the initial state.
  const initialState = {
    course: 0,
    error: null,
    firstName: "",
    lastName: "",
    resolving: {
      [Resolution.Creation]: null,
      [Resolution.Subscriptions]: null
    },
    subscriptions: []
  };

  // Perform middleware call. Wrap in dev tools if necessary.
  let middlewareCall = applyMiddleware(...middleware);
  if (!production) {
    middlewareCall = composeWithDevTools(middlewareCall);
  }

  // Create the Redux store and inject middlewares
  const store = createStore(
    rootReducer,
    initialState,
    middlewareCall
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}