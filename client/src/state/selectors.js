export const getError = state => state.error;
export const getFirstName = state => state.firstName;
export const getLastName = state => state.lastName;
export const getResolution = (resolution, state) => state.resolving[resolution];
export const getSubscriptions = state => state.subscriptions;