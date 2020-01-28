import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../components/button";
import Hover from "../components/hover";
import { deleteSubscription } from "../state/api";
import { cancelDelete } from "../state/creators";
import { getDelete } from "../state/selectors";

const DeleteSubscription = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  background-color: #EEEEEE;
  color: black;
  border: solid 1px black;
  border-radius: 5px;

  .delete-body {
    padding: 0 10px;
  }

  .delete-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.alert};
    color: white;
    font-size: 1.2em;
    padding: 10px 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export default ({ }) => {
  // Selectors.
  const id = useSelector(getDelete);

  // Dispatch
  const dispatch = useDispatch();

  return (
    <Hover visible={id !== null}>
      <DeleteSubscription>
        <div className="delete-header">
          Are you sure?
        </div>
        <div className="delete-body">
          <p>
            Are you sure you want to drop this course? Think of all the knowledge you would be missing out on!
            Just go ahead and click that "Cancel" button. It's what's best.
        </p>
          <Button onClick={async () => await deleteSubscription(dispatch, id)} style={{ marginBottom: "10px" }} alert>Drop</Button>
          <Button onClick={() => dispatch(cancelDelete())}>Cancel</Button>
        </div>
      </DeleteSubscription>
    </Hover>
  );
};