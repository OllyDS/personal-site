import * as React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  return(
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary >
          <Menu.Menu>
            <Menu.Item
              as={NavLink} exact to="/"
              name="OLIVER DE SOUSA"
              active={activeItem === "OLIVER DE SOUSA"}
              onClick={(name) => setActiveItem(name)}
            />
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink} exact to="/cv"
              name="CV"
              active={activeItem === "CV"}
              onClick={(name) => setActiveItem(name)}
            />
            <Menu.Item
              as={NavLink} exact to="/contact"
              name="CONTACT"
              active={activeItem === "CONTACT"}
              onClick={(name) => setActiveItem(name)}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
};

export default Navbar;
