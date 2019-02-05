import React from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'

const CV = () => {
    return(
        <Container>
            <Divider horizontal className='cv-divider'>
                <Header as='h2'>About Me</Header>
            </Divider>
            <div className='bio'>
                <p>I'm a junior programmer with a background in finance, where I worked as a currency trader and consultant.
                I have a real passion for creating things and helping to solve challenges and enjoy working in collaborative environements where teamwork is promoted.</p>
            </div>
            <Divider horizontal className='cv-divider'>
                <Header as='h2'>Professional Experience</Header>
            </Divider>

        </Container>
    )
}
export default CV
