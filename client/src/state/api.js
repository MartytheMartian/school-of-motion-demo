import { confirmDelete, setError, setResolution, setSubscription, setSubscriptions } from "./creators";
import Resolution from "../constants/resolution";
import { del, list, post } from "../api/subscription";

// Gets a subscription list and sets it in state.
export async function listSubscriptions(dispatch) {
  try {
    // Set resolution status for subscriptions.
    dispatch(setResolution(Resolution.Subscriptions, true));

    // Perform the request.
    const subscriptions = await list();

    // Set the subscriptions in state.
    dispatch(setSubscriptions(subscriptions));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    // Set resolution status for subscriptions.
    dispatch(setResolution(Resolution.Subscriptions, false));
  }
};

// Creates a subscription.
export async function postSubscription(dispatch, request) {
  try {
    // Set resolution status for creation.
    dispatch(setResolution(Resolution.Creation, true));

    // Perform the request.
    const subscription = await post(request);

    // Set the subscription in state.
    dispatch(setSubscription(subscription));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    // Set resolution status for creation.
    dispatch(setResolution(Resolution.Creation, false));
  }
};

// Deletes a subscription.
export async function deleteSubscription(dispatch, id) {
  try {
    // Set resolution status for creation.
    dispatch(setResolution(Resolution.Deletion, true));

    // Perform the request.
    await del(id);

    // Confirm the deletion.
    dispatch(confirmDelete(id));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    // Set resolution status for creation.
    dispatch(setResolution(Resolution.Deletion, false));
  }
};