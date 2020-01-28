import React from "react";

import DeleteSubscription from "./delete-subscription";
import List from "./list";
import Signup from "./signup";
import Demo from "../components/demo";

export default ({ resolvingSubscriptions }) =>
  <Demo>
    <h4>Course Registration</h4>
    <Signup />
    <h4>Current Courses</h4>
    <List />
    <DeleteSubscription />
  </Demo>;