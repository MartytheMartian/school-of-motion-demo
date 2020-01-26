import React from "react";
import { connect } from "react-redux";

import { getError } from "../state/selectors";

const ErrorDisplay = ({ children, error }) => {
  if (!error) {
    return children;
  }

  return (
    <div>Error</div>
  );
};

const mapStateToProps = state => ({
  error: getError(state)
});

export default connect(mapStateToProps)(ErrorDisplay);