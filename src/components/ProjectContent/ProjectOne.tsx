import * as React from "react";
import { Dimmer, Image, Header, Button } from "semantic-ui-react";

const ProjectOne = () => {
  const [active, setActive] = React.useState(false);

  const content = (
    <div>
      <Header as="h2" inverted>mimapp</Header>
      <p>A personalised Map for saving and sharing your favourite places to visit. Uses Google"s Map, Places and Geolocation API"s.</p>
      <Button as="a" href="https://github.com/OllyDS/mimapp" target="_blank">Github</Button>
      <Button as="a" href="https://m1mapp.herokuapp.com" target="_blank">Live Demo</Button>
    </div>
  );

  return (
    <Image.Group>
      <Dimmer.Dimmable
        as={Image}
        src="/images/mimapp-img.jpg"
        alt="image of a map titled mimapp"
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      />
    </Image.Group>
  );
};

export default ProjectOne;
