import * as React from "react";
import { Link } from "react-router-dom"
import { Dimmer, Image, Header, Button } from "semantic-ui-react";

const FxTradingGame = () => {
  const [active, setActive] = React.useState(false);
    
  const content = (
    <div>
      <Link to="/">
        <Header as='h2' inverted>FX Trading Game</Header>
      </Link>
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

export default FxTradingGame;
