import React from "react";
import Panel from "./panel";
import styled from "styled-components";

import Rick from "../images/rickastley.jpg";

const Explanation = styled(Panel)`
  background-color: #393E41;
  color: white;
`;

const PurposeBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: auto;
  text-align: left;
  width: 1200px;

  .profile {
    text-align: center;
    min-width: 200px;
    margin-right: 100px;
  }
  
  .profile-picture img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 100px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`;

export default () =>
  <Explanation title="About the Author">
    <PurposeBody>
      <div className="profile">
        <h4>
          William Roton
        </h4>
        <div className="profile-picture">
          <img src={Rick} alt="Profile" />
        </div>
      </div>
      <div className="summary">
        <h4>Summary</h4>
        My name is William Roton. I am a software architect with eight years of professional experience in the software development field.
        My interest in software development began when I was ten years old. I took an interest in tweaking the code of some of my favorite games. I started
        my first development job at sixteen for a local business owned by a family friend. Fast forward eight years and I am now a software architect
        for my current employer in the transaction processing industry.
        <br />
        <br />
        For me, software development isn't just a job. I enjoy working on development projects for fun outside of work. I also enjoy playing video games
        and creating music with my band in my spare time. Pretty soon you may see local venues in your area promoting shows for my band, Brutal Stache.
        I am happily married and a father of one baby boy. My wife and I are currently expecting our second child in March of 2020.
      </div>
    </PurposeBody>
  </Explanation>