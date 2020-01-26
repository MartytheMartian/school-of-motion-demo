import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  display: ${p => p.loading ? "flex" : "none"};
  position: ${p => p.fullscreen ? "fixed" : "absolute"};
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .1);

  .loading-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 5px solid rgb(207, 207, 207);
    border-radius: 50%;
    border-left: ${p => "5px solid " + p.theme[p.color]};
    animation: spin 1s infinite linear;
    z-index: 1000;
  }

  .loading-icon-small {
    width: 15px;
    height: 15px;
    border: 1.9px solid rgb(207, 207, 207);
    border-radius: 50%;
    border-left: ${p => "1.9px solid " + p.theme[p.color]};
  }
`;

export default ({ color = "primary", fullscreen, loading, small }) =>
  <Loading color={color} fullscreen={fullscreen} loading={loading ? 1 : 0}>
    <div className={small ? "loading-icon loading-icon-small" : "loading-icon"}></div>
  </Loading>;