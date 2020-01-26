import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Panel from "../components/panel";

import List from "./list";
import Signup from "./signup";
import Demo from "../components/demo";
import Loading from "../components/loading";
import Resolution from "../constants/resolution";
import { getResolution } from "../state/selectors";

const DemoContainer = ({ resolvingSubscriptions }) =>
  <Demo>
    <h4>Course Registration</h4>
    <Signup />
    <h4>Current Courses</h4>
    <List />
  </Demo>;

const mapStateToProps = state => ({
  resolvingSubscriptions: getResolution(Resolution.Subscriptions, state)
});

export default connect(mapStateToProps)(DemoContainer);