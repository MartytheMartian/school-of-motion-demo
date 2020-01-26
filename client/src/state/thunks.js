import { setError, setResolution, setSubscriptions } from "./creators";
import Resolution from "../constants/resolution";
import { listSubscriptions } from "../api/subscription";

// Gets a subscription list and sets it in state.
export const listSubscriptions = () => async (dispatch) => {
  try {
    // Set resolution status for subscriptions.
    dispatch(setResolution(Resolution.Subscriptions, true));

    // Perform the request.
    const subscriptions = await listSubscriptions();

    // Set the subscriptions in state.
    dispatch(setSubscriptions(subscriptions));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    // Set resolution status for subscriptions.
    dispatch(setResolution(Resolution.Subscriptions, false));
  }
};
