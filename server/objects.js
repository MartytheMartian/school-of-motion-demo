// Valid courses.
const VALID_COURSES = [0, 1, 2, 3, 4];

// Creates a subscription object from post input.
// Returns null if the input couldn't be retrieved.
function subscription(input) {
  // Invalid if there is no input.
  if (!input) {
    return null;
  }

  // Check the first name.
  if (!input.firstName || input.firstName.length > 50) {
    return null;
  }

  // Check the last name.
  if (!input.lastName || input.lastName.length > 50) {
    return null;
  }

  // Check that the course exists and is valid.
  if (!input.course || !VALID_COURSES.includes(input.course)) {
    return null;
  }

  return {
    id: input._id ? input._id : undefined,
    firstName: input.firstName,
    lastName: input.lastName,
    course: input.course
  };
}

module.exports = {
  subscription: subscription
};