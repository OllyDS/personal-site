import React from 'react'
import { Dimmer, Image, Header, Button } from 'semantic-ui-react'

class ProjectOne extends React.Component {

    state = { active: false }

    dimmerSwitch = () => {
        this.setState({ active: !this.state.active })
    }


    content = (
        <div>
            <Header as='h2' inverted>mimapp</Header>
            <p>A personalised Map for saving and sharing your favourite places to visit. Uses Google's Map, Places and Geolocation API's.</p>
            <Button as='a' href='https://github.com/OllyDS/mimapp' target='_blank'>Github</Button>
            <Button as='a' href='https://m1mapp.herokuapp.com' target='_blank'>Live Demo</Button>
        </div>
    )

    render = () => {

        const { content, dimmerSwitch } = this
        const { active } = this.state
    
        return (
            <Image.Group>
                <Dimmer.Dimmable
                    as={Image}
                    src='/images/mimapp-img.jpg'
                    alt='image of a map titled mimapp'
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={dimmerSwitch}
                    onMouseLeave={dimmerSwitch}
                />
            </Image.Group>
        )
    }
}
export default ProjectOne