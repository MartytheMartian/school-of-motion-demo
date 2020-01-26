import React, { Fragment } from "react";
import { connect } from "react-redux";

import DemoRow from "../components/demo-row";
import Courses from "../constants/courses";
import Resolution from "../constants/resolution";
import { getResolution, getSubscriptions } from "../state/selectors";

const List = ({ resolvingSubscriptions, subscriptions }) =>
  <Fragment>
    <DemoRow firstName="First Name" lastName="Last Name" course="Course" style={{ fontSize: ".8em" }} />
    <DemoRow firstName="William" lastName="Roton" course={Courses[0]} />
    <DemoRow firstName="William" lastName="Roton" course={Courses[1]} />
    <DemoRow firstName="William" lastName="Roton" course={Courses[2]} />
    <DemoRow firstName="William" lastName="Roton" course={Courses[3]} />
    <DemoRow firstName="William" lastName="Roton" course={Courses[4]} />
  </Fragment>

const mapStateToProps = state => ({
  resolvingSubscriptions: getResolution(Resolution.Subscriptions, state),
  subscriptions: getSubscriptions(state)
});

export default connect(mapStateToProps)(List);