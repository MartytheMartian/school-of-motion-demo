import Resolution from "../constants/resolution";

export const canSubmit = state => {
  // First name validation.
  if (!state.firstName || state.firstName.length === 0 || state.firstName.length > 20) {
    return false;
  }

  // Last name validation.
  if (!state.lastName || state.lastName.length === 0 || state.lastName.length > 20) {
    return false;
  }

  // Must not be currently resolving.
  return state.resolving[Resolution.Creation] !== true;
};

export const createRequest = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  course: state.course
});

export const getDelete = state => state.deleteID;
export const getError = state => state.error;
export const getResolution = (resolution, state) => state.resolving[resolution];
export const getSubscriptions = state => state.subscriptions;