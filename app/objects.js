// Creates a subscription object from post input.
// Returns null if the input couldn't be retrieved.
function subscription(input) {
  // Invalid if there is no input.
  if (!input) {
    return null;
  }

  // Check the first name.
  if (!input.firstName) {
    return null;
  }

  // Check the last name.
  if (!input.lastName) {
    return null;
  }

  return {
    id: input._id ? input._id : undefined,
    firstName: input.firstName,
    lastName: input.lastName
  };
}

export default {
  subscription: subscription
};