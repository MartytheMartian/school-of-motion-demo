import React, { Fragment } from "react";
import { connect } from "react-redux";

import DemoRow from "../components/demo-row";
import Courses from "../constants/courses";
import Input from "../components/input";
import Resolution from "../constants/resolution";
import { getResolution } from "../state/selectors";


const Signup = ({ resolvingSubscriptions }) =>
  <Fragment>
    <DemoRow
      firstName={<Input placeholder="First Name" />}
      lastName={<Input placeholder="Last Name" />}
      course={Courses[0]}
      onSubmit={() => { alert('test') }}
    />
  </Fragment>

const mapStateToProps = state => ({
  resolvingSubscriptions: getResolution(Resolution.Subscriptions, state)
});

export default connect(mapStateToProps)(Signup);