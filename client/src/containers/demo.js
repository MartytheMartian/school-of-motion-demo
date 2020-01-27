import React from "react";

import List from "./list";
import Signup from "./signup";
import Demo from "../components/demo";
import Resolution from "../constants/resolution";
import { getResolution } from "../state/selectors";

export default ({ resolvingSubscriptions }) =>
  <Demo>
    <h4>Course Registration</h4>
    <Signup />
    <h4>Current Courses</h4>
    <List />
  </Demo>;