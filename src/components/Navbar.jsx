import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {

    state = { activeItem: null }

    handleItemClick = (event, {name}) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state
        const { handleItemClick } = this

        return(
            <div>
                <Segment inverted>
                    <Menu inverted pointing secondary >
                        <Menu.Menu>
                            <Menu.Item
                                as={NavLink} exact to='/'
                                name='OLIVER DE SOUSA'
                                active={activeItem === 'OLIVER DE SOUSA'}
                                onClick={handleItemClick}
                            />
                        </Menu.Menu>
                        <Menu.Menu position='right'>
                            <Menu.Item
                                as={NavLink} exact to='/cv'
                                name='CV'
                                active={activeItem === 'CV'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                as={NavLink} exact to='/playground'
                                name='CV Playground'
                                active={activeItem === 'CV Playground'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                as={NavLink} exact to='/contact'
                                name='CONTACT'
                                active={activeItem === 'CONTACT'}
                                onClick={handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        )
    }
}

export default Navbar