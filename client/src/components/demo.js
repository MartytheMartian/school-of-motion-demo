import React from "react";
import styled from "styled-components";
import Loading from "../components/loading";
import Panel from "../components/panel";

const CustomerQuote = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: .8em;
`;

const Demo = styled(Panel)`
  background-color: ${p => p.theme.primary};
  color: white;
`;

const Explanation = styled.div`
  margin-bottom: 20px;
`;

export default ({ children, loading }) =>
  <div style={{ position: "relative" }}>
    <Loading loading={loading} />
    <Demo title="Course Registration Demo">
      <Explanation>
        Dive in to a world of learning by signing up for your first course.
        If you've already experienced one of our awesome courses,
        expand your knowledge by signing up for another one!
        Simply fill out the form below and click the submit button.
    </Explanation>
      {children}
      <CustomerQuote>
        "I signed up for a course and instantly became a genius before I even got my first lesson!" - A real customer
    </CustomerQuote>
    </Demo>
  </div>;