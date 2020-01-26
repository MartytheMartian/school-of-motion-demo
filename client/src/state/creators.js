import * as Types from "./constants";

function createAction(type, payload) {
  return {
    type,
    ...payload
  };
}

export const setError = error => createAction(Types.ERROR_SET, { error });
export const setFirstName = firstName => createAction(Types.FIRST_NAME_SET, { firstName });
export const setLastName = lastName => createAction(Types.LAST_NAME_SET, { lastName });
export const setResolution = (resolution, resolving) => createAction(Types.RESOLVING_SET, { resolution, resolving });
export const setSubscriptions = subscriptions => createAction(Types.SUBSCRIPTIONS_SET, { subscriptions });