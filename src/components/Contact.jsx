import React from 'react'
import { Container, Grid, Icon, Menu, Responsive } from 'semantic-ui-react'

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Desktop = props => <Responsive {...props} minWidth={768} />

class Contact extends React.Component {
    render() {
        return(
            <div className='contact-page'>
            <Mobile>
                <Container>
                    <div className='contact-text'>
                        <p>hello.</p>
                    </div>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Menu.Item as='a' href='mailto: oliver.seq@gmail.com' target='_blank'>
                                    <Icon name='mail' size='huge' link/>
                                </Menu.Item>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu.Item as='a' href='https://linkedin.com/in/oliver-de-sousa' target='_blank'>
                                    <Icon name='linkedin' size='huge' link/>
                                </Menu.Item>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu.Item as='a' href='https://github.com/OllyDS' target='_blank'>
                                    <Icon name='github' size='huge' link/>
                                </Menu.Item>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu.Item as='a' href='https://medium.com/@oliver.seq' target='_blank'>
                                    <Icon name='blogger' size='huge' link/>
                                </Menu.Item>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Mobile>
            <Desktop>
                <div className='contact-text'>
                    <p>hello.</p>
                </div>
                <div className='contact-icons'>
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
            </Desktop>
            </div>
        )
    }
}
export default Contact