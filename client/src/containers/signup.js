import React from "react";
import { connect } from "react-redux";

import DemoRow from "../components/demo-row";
import Courses from "../constants/courses";
import Input from "../components/input";
import Select from "../components/select";
import Resolution from "../constants/resolution";
import { getResolution } from "../state/selectors";

// Map the courses dictionary to an array.
const CourseOptions = Object.keys(Courses).map(key => ({
  id: key,
  value: Courses[key]
}));

const Signup = ({ resolvingSubscriptions }) =>
  <DemoRow
    firstName={<Input placeholder="First Name" />}
    lastName={<Input placeholder="Last Name" />}
    course={<Select value={Courses[1]} options={CourseOptions} onChange={e => console.log(e)} />}
    onSubmit={() => { alert('test') }}
  />;

const mapStateToProps = state => ({
  resolvingSubscriptions: getResolution(Resolution.Subscriptions, state)
});

export default connect(mapStateToProps)(Signup);