import React from "react";
import { useDispatch, useSelector } from "react-redux";

import DemoRow from "../components/demo-row";
import Courses from "../constants/courses";
import Input from "../components/input";
import Select from "../components/select";
import Resolution from "../constants/resolution";
import { setCourse, setFirstName, setLastName } from "../state/creators";
import { canSubmit, createRequest, getResolution } from "../state/selectors";
import { postSubscription } from "../state/api";

// Map the courses dictionary to an array.
const CourseOptions = Object.keys(Courses).map(key => ({
  id: Number(key),
  value: Courses[key]
}));

export default () => {
  // Selectors.
  const submitEnabled = useSelector(canSubmit);
  const request = useSelector(createRequest);
  const creationResolution = useSelector(state => getResolution(Resolution.Creation, state));
  const subscriptionResolution = useSelector(state => getResolution(Resolution.Subscriptions, state));

  // Break the request apart.
  const { course, firstName, lastName } = request;

  // Dispatch for state changes.
  const dispatch = useDispatch();

  // Disable controls if subscriptions haven't been resolved.
  const disabled = subscriptionResolution !== false;

  return (
    <DemoRow
      disabled={!submitEnabled}
      submitting={creationResolution === true}
      firstName={
        <Input placeholder="First Name" value={firstName} disabled={disabled}
          onChange={value => { dispatch(setFirstName(value)); }} />
      }
      lastName={
        <Input placeholder="Last Name" value={lastName} disabled={disabled}
          onChange={value => { dispatch(setLastName(value)); }} />
      }
      course={
        <Select value={Courses[course]} options={CourseOptions} disabled={disabled}
          onChange={value => { dispatch(setCourse(value)); }} />
      }
      onSubmit={() => postSubscription(dispatch, request)}
    />
  );
};