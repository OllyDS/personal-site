import * as React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";

const Contact = () => {
  return(
    <Container>
      <div className="contact-header">
          <p className="contact-text">hello.</p>
      </div>
      <div className="icons-container">
        <Menu.Item as='a' href='mailto: oliver.seq@gmail.com' target='_blank'>
          <Icon name='mail' size='huge' link/>
        </Menu.Item>
        <Menu.Item as='a' href='https://linkedin.com/in/oliver-de-sousa' target='_blank'>
          <Icon name='linkedin' size='huge' link/>
        </Menu.Item>
        <Menu.Item as='a' href='https://github.com/OllyDS' target='_blank'>
            <Icon name='github' size='huge' link/>
        </Menu.Item>
        <Menu.Item as='a' href='https://medium.com/@oliver.seq' target='_blank'>
            <Icon name='blogger' size='huge' link/>
        </Menu.Item>
      </div>
    </Container>
  );
};

export default Contact;
