import * as React from "react";
import { Dimmer, Image, Header, Button } from "semantic-ui-react";

const ProjectTwo = () => {
  const [active, setActive] = React.useState(false);
    
  const content = (
    <div>
      <Header as='h2' inverted>FX Trading Game</Header>
      <p>Make as much money as you can buying and selling currency pairs in 60seconds to get the best score possible.</p>
      <Button as='a' href='https://github.com/anavarreteuk/Stock-Market-Game-FrontEnd' target='_blank'>Github</Button>
      <Button as='a' href='https://www.youtube.com/watch?v=jkf82_QIURA' target='_blank'>Video Demo</Button>
    </div>
  );

  return (
    <Image.Group>
      <Dimmer.Dimmable
        as={Image}
        src='/images/FX-trading-game-img.jpg'
        alt='screen showing four seperate panels with price charts on each'
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      />
    </Image.Group>
  );
};

export default ProjectTwo;
