import { combineReducers } from "redux";

import * as Types from "./constants";

function courseReducer(state = null, action) {
  switch (action.type) {
    case Types.COURSE_SET:
      return action.course;
    default:
      return state;
  }
}

function errorReducer(state = null, action) {
  switch (action.type) {
    // case Types.ERROR_SET:
    //   return action.error;
    default:
      return state;
  }
}

function firstNameReducer(state = null, action) {
  switch (action.type) {
    case Types.FIRST_NAME_SET:
      return action.firstName;
    default:
      return state;
  }
}

function lastNameReducer(state = null, action) {
  switch (action.type) {
    case Types.LAST_NAME_SET:
      return action.lastName;
    default:
      return state;
  }
}

function resolvingReducer(state = null, action) {
  switch (action.type) {
    case Types.RESOLVING_SET:
      return {
        ...state,
        [action.resolution]: action.resolving
      };
    default:
      return state;
  }
}

function subscriptionsReducer(state = null, action) {
  switch (action.type) {
    case Types.SUBSCRIPTION_SET:
      return [
        action.subscription,
        ...state
      ];
    case Types.SUBSCRIPTIONS_SET:
      return action.subscriptions;
    default:
      return state;
  }
}

// Combine each reducer.
export default combineReducers({
  error: errorReducer,
  course: courseReducer,
  firstName: firstNameReducer,
  lastName: lastNameReducer,
  resolving: resolvingReducer,
  subscriptions: subscriptionsReducer
});