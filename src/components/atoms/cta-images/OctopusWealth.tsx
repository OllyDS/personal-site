import * as React from "react";
import { Link } from "react-router-dom";
import { Dimmer, Image, Header } from "semantic-ui-react";

const OctopusWealth = () => {
  const [active, setActive] = React.useState(false);

  const content = (
    <div>
      <Link to="/projects/octopus-wealth/">
        <Header as="h2" inverted>Octopus Wealth</Header>
      </Link>
    </div>
  );

  return (
    <Image.Group>
      <Dimmer.Dimmable
        as={Image}
        src="/images/OctopusWealth.png"
        alt="image of a map titled mimapp"
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      />
    </Image.Group>
  );
};

export default OctopusWealth;