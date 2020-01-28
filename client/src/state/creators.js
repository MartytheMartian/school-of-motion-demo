import * as Types from "./constants";

function createAction(type, payload) {
  return {
    type,
    ...payload
  };
}

export const cancelDelete = () => createAction(Types.DELETE_CANCEL);
export const confirmDelete = id => createAction(Types.DELETE_CONFIRM, { id });
export const setCourse = course => createAction(Types.COURSE_SET, { course });
export const setDelete = id => createAction(Types.DELETE_SET, { id });
export const setError = error => createAction(Types.ERROR_SET, { error });
export const setFirstName = firstName => createAction(Types.FIRST_NAME_SET, { firstName });
export const setLastName = lastName => createAction(Types.LAST_NAME_SET, { lastName });
export const setResolution = (resolution, resolving) => createAction(Types.RESOLVING_SET, { resolution, resolving });
export const setSubscription = subscription => createAction(Types.SUBSCRIPTION_SET, { subscription });
export const setSubscriptions = subscriptions => createAction(Types.SUBSCRIPTIONS_SET, { subscriptions });