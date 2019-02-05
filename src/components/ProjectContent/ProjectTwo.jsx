import React from 'react'
import { Dimmer, Image, Header, Button } from 'semantic-ui-react'

class ProjectTwo
 extends React.Component {

    state = { active: false }

    dimmerSwitch = () => {
        this.setState({ active: !this.state.active })
    }
    
    content = (
        <div>
            <Header as='h2' inverted>FX Trading Game</Header>
            <p>Make as much money as you can buying and selling currency pairs in 60seconds to get the best score possible.</p>
            <Button as='a' href='https://github.com/anavarreteuk/Stock-Market-Game-FrontEnd' target='_blank'>Github</Button>
            <Button as='a' href='https://www.youtube.com/watch?v=jkf82_QIURA' target='_blank'>Video Demo</Button>
        </div>
    )

    render = () => {

        const { content, dimmerSwitch } = this
        const { active } = this.state
    
        return (
            <Image.Group>
                <Dimmer.Dimmable
                    as={Image}
                    src='/images/FX-trading-game-img.jpg'
                    alt='screen showing four seperate panels with price charts on each'
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={dimmerSwitch}
                    onMouseLeave={dimmerSwitch}
                />
            </Image.Group>
        )
    }
}
export default ProjectTwo
