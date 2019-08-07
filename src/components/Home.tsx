import * as React from "react";
import styled from "styled-components";
import { Container, Divider, Image } from "semantic-ui-react";

import Mimapp from "./atoms/cta-images/Mimapp";
import FxTradingGame from "./atoms/cta-images/FxTradingGame";
import OctopusWealth from "./atoms/cta-images/OctopusWealth"

const STextWrapper = styled.div`
  font-family: 'Roboto' sans-serif;
  margin: 60px 20px;
  text-align: center;
`;

const SHeader = styled.h1`
  font-family: 'Roboto' sans-serif;
  font-size: 1.6em;
  margin: 8px 0;
`;

const SImageWrapper = styled.div`
  margin-bottom: 2em;
`;

const Home = () => (
  <>
    <img className="homepage-image" src="/images/london-wide.jpg" alt="picture of the City of London"/>
    <STextWrapper>
      <SHeader>Hello, I'm Oliver, a software engineer living in London.</SHeader>
      <p>Please feel free to explore my projects below, and get in touch if you have any queries.</p>
    </STextWrapper>
    <Divider horizontal>Professional Work</Divider>
    <Container>
      <SImageWrapper>
        <OctopusWealth />
      </SImageWrapper>
    </Container>
    <Divider horizontal>Personal Projects</Divider>
    <Container>
      <SImageWrapper>
        <Mimapp />
      </SImageWrapper>
      <SImageWrapper><FxTradingGame /></SImageWrapper>
    </Container>
    <Divider horizontal>Skills</Divider>
    <Container className="lang-icons-container">
      <Image.Group size="tiny">
        <Image src="/images/icons/react.png" alt="react.js" className="icons"/>
        <Image src="/images/icons/redux.png" alt="redux" className="icons"/>
        <Image src="/images/icons/js.png" alt="javascript" className="icons"/>
        <Image src="/images/icons/ts.png" alt="typescript" className="icons"/>
        <Image src="/images/icons/node.png" alt="node.js" className="icons"/>
        <Image src="/images/icons/express.png" alt="express" className="icons"/>
        <Image src="/images/icons/html-5.png" alt="html 5" className="icons"/>
        <Image src="/images/icons/css.png" alt="css" className="icons"/>
        <Image src="/images/icons/python.png" alt="python" className="icons"/>
        <Image src="/images/icons/ruby.png" alt="ruby" className="icons"/>
        <Image src="/images/icons/ror.png" alt="ruby on rails" className="icons"/>
        <Image src="/images/icons/postgresql.png" alt="postgresql" className="icons"/>
        <Image src="/images/icons/graphql.png" alt="graphql" className="icons"/>
        <Image src="/images/icons/apollo.png" alt="apollo" className="icons"/>
        <Image src="/images/icons/heroku.png" alt="heroku" className="icons"/>
        <Image src="/images/icons/github.png" alt="github" className="icons"/>
      </Image.Group>
    </Container>
  </>
);

export default Home;
