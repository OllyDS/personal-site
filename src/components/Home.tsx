import * as React from "react";
import { Container, Divider, Image } from "semantic-ui-react";

import ProjectOne from "./ProjectContent/ProjectOne";
import ProjectTwo from "./ProjectContent/ProjectTwo";

const Home = () => {
  return(
    <div className="home-page">
      <img className="homepage-image" src="/images/london-wide.jpg" alt="picture of the City of London"/>
      <div className="heading-container">
        <p className="heading-text">Hello, I'm Oliver, a software engineer living in London. Please feel free to explore my projects and get in touch.</p>
      </div>
      <Divider horizontal>Projects</Divider>
      <Container>
        <div className="project-container"><ProjectOne /></div>
        <div className="project-container"><ProjectTwo /></div>
      </Container>
      <Divider horizontal>Skills</Divider>
      <Container className="lang-icons-container">
        <Image.Group size="tiny">
          <Image src="/images/react-icon.png" alt="react.js" className="icons"/>
          <Image src="/images/js-icon.png" alt="javascript" className="icons"/>
          <Image src="/images/typescript-icon.png" alt="typescript" className="icons"/>
          <Image src="/images/html-5-icon.png" alt="html 5" className="icons"/>
          <Image src="/images/css-icon.png" alt="css" className="icons"/>
          <Image src="/images/python-icon.png" alt="python" className="icons"/>
          <Image src="/images/nodejs-icon.png" alt="node.js" className="icons"/>
          <Image src="/images/ruby-icon.png" alt="ruby" className="icons"/>
          <Image src="/images/ror-icon.png" alt="ruby on rails" className="icons"/>
          <Image src="/images/postgresql-icon.png" alt="postgresql" className="icons"/>
          <Image src="/images/heroku-icon.png" alt="heroku" className="icons"/>
          <Image src="/images/github-icon.png" alt="github" className="icons"/>
        </Image.Group>
      </Container>
    </div>
  );
};
export default Home;
