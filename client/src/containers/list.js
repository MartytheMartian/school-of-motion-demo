import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import DemoRow from "../components/demo-row";
import Courses from "../constants/courses";
import Resolution from "../constants/resolution";
import { setDelete } from "../state/creators";
import { getResolution, getSubscriptions } from "../state/selectors";
import { listSubscriptions } from "../state/api";

const List = styled.div`
  height: 204px;
  overflow-y: auto;
  overflow-x: hidden;

  .no-courses {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: dashed 2px white;
    font-size: .9em;
    text-align: center;
    box-sizing: border-box;
  }
`;

export default () => {
  // Selectors.
  const subscriptionResolution = useSelector(state => getResolution(Resolution.Subscriptions, state));
  const subscriptions = useSelector(getSubscriptions);

  // Declare dispatch.
  const dispatch = useDispatch();

  // One-time effects.
  useEffect(() => {
    // Get the subscriptions.
    async function getSubscriptions() {
      await listSubscriptions(dispatch);
    }

    // Only call if the subscriptions haven't been received yet.
    if (subscriptionResolution === null) {
      getSubscriptions();
    }
  }, [dispatch, subscriptionResolution]);

  const hasSubscriptions = subscriptions && subscriptions.length > 0;

  return (
    <Fragment>
      <DemoRow firstName="First Name" lastName="Last Name" course="Course" style={{ fontSize: ".8em" }} />
      <List>
        {
          hasSubscriptions ? subscriptions.map((subscription, index) => <DemoRow key={index} onDelete={() => { dispatch(setDelete(subscription.id)) }}
            firstName={subscription.firstName} lastName={subscription.lastName} course={Courses[subscription.course]} hover />) :
            <div className="no-courses">
              No courses. :(
              <br />
              Change that by following the instructions above!
            </div>
        }
      </List>
    </Fragment>
  );
};