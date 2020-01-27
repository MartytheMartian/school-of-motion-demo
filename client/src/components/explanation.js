import React from "react";
import Panel from "./panel";
import styled from "styled-components";

const Explanation = styled(Panel)`
  background-color: #331E36;
  color: white;
`;

const PurposeBody = styled.div`
  margin: auto;
  text-align: left;
  max-width: 1200px;
`;

export default () =>
  <Explanation title="Demo Explained">
    <PurposeBody>
      <h4>Purpose</h4>
      <p>
        The purpose of this demo is to provide a demonstration of the MERN stack. The MERN stack stands for MongoDB, Express, React, and Node JS.
        An additional purpose is to provide an example of an application that is run within a Docker container. This application and its host utilize all
        of these technologies. The code and the Docker files are all in a <a href="https://github.com/MartytheMartian/school-of-motion-demo">shared repository on GitHub</a>.
      </p>
      <h4>MERN Stack</h4>
      <p>
        There are several benefits to using the MERN stack. One of the biggest benefits is that each layer of the MERN stack is written using JavaScript.
          Having one common language across all stacks of an application can help narrow the number of skills that employers have to look for in potential new hires.
          Another big benefit is the rapid development processes that can be used when writing applications using this stack. Because everything is in one language and
          that language happens to be JavaScript, a weakly typed and fairly forgiving language, development of applications can be done fairly quickly. Finally, one more benefit
          of the MERN stack is that the technologies used are all fairly modern and well supported by the development community.
      </p>
      <h4>Hosting and Docker</h4>
      <p>
        The application is hosted on a Linux server using <a href="https://www.linode.com/">Linode</a>. Docker is run on the server and hosts two containers at a time. The first
        container has a running instance of its web host. This web host exposes the React SPA (Single Page Application) and its corresponding API to the world. The React SPA is delivered by
        a Node JS instance using Express. The Express also exposes HTTP routes that provide access to the data layer. The second container has a running instance of Mongo DB
        with the necessary database infrastructure already in place.
      </p>
    </PurposeBody>
  </Explanation>