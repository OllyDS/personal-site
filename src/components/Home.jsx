import React from 'react'
import { Container, Grid, Image, Divider, Responsive } from "semantic-ui-react"

import ProjectOne from './ProjectContent/ProjectOne.jsx'
import ProjectTwo from './ProjectContent/ProjectTwo.jsx'


const Mobile = props => <Responsive {...props} maxWidth={767} />
const Desktop = props => <Responsive {...props} minWidth={768} />

class Home extends React.Component {
    render(){
        return(
            <div className='home-page'>
                <Mobile>
                    <div className='heading-about-me-mobile'>
                        <p>Hello, I'm Oliver, a junior software developer living in London. Please feel free to explore my projects and get in touch.</p>
                    </div>
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <Divider horizontal>Projects</Divider>
                                <Container>
                                    <div className='project-container'><ProjectOne /></div>
                                    <div className='project-container'><ProjectTwo /></div>
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Container className='lang-icons-parent'>
                        <Divider horizontal>Skills</Divider>
                        <Grid className='skills'>
                            <Grid.Row centered columns={3}>
                                <Image.Group size='tiny'>
                                    <Image src='/images/react-icon.png' alt='react.js' className='mobile-icons'/>
                                    <Image src='/images/js-icon.png' alt='javascript' className='mobile-icons'/>
                                    <Image src='/images/nodejs-icon.png' alt='node.js' className='mobile-icons'/>
                                </Image.Group>
                                <Image.Group size='tiny'>
                                    <Image src='/images/postgresql-icon.png' alt='postgresql' className='mobile-icons'/>
                                    <Image src='/images/ruby-icon.png' alt='ruby' className='mobile-icons'/>
                                    <Image src='/images/ror-icon.png' alt='ruby on rails' className='mobile-icons'/>
                                </Image.Group>
                                <Image.Group size='tiny'>
                                    <Image src='/images/css-icon.png' alt='css' className='mobile-icons'/>
                                    <Image src='/images/html-5-icon.png' alt='html 5' className='mobile-icons'/>
                                    <Image src='/images/heroku-icon.png' alt='heroku' className='mobile-icons'/>
                                </Image.Group>
                                <Image.Group size='tiny'>
                                    <Image src='/images/github-icon.png' alt='github' className='mobile-icons'/>
                                </Image.Group>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Mobile>
                <Desktop>
                    <Image src='/images/marble-img.jpg' className='homepage-image' alt='picture of marble surface'/>
                    <div className='heading-about-me'>
                        <p>Hello, I'm Oliver, a junior software developer living in London. Please feel free to explore my projects and get in touch.</p>
                    </div>
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                            <Divider horizontal>Projects</Divider>
                                <Container>
                                    <div className='project-container'><ProjectOne /></div>
                                    <div className='project-container'><ProjectTwo /></div>
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Container className='lang-icons-parent'>
                        <Divider horizontal>Skills</Divider>
                        <Grid className='skills'>
                            <Grid.Row centered columns={5}>
                                <Image.Group size='tiny'>
                                <Image src='/images/react-icon.png' alt='react.js' className='desktop-icons'/>
                                <Image src='/images/js-icon.png' alt='javascript' className='desktop-icons'/>
                                <Image src='/images/nodejs-icon.png' alt='node.js' className='desktop-icons'/>
                                <Image src='/images/ruby-icon.png' alt='ruby' className='desktop-icons'/>
                                <Image src='/images/ror-icon.png' alt='ruby on rails' className='desktop-icons'/>
                                </Image.Group>
                            </Grid.Row>
                            <Grid.Row centered columns={5}>
                                <Image.Group size='tiny'>
                                <Image src='/images/html-5-icon.png' alt='html 5' className='desktop-icons'/>
                                <Image src='/images/css-icon.png' alt='css' className='desktop-icons'/>
                                <Image src='/images/postgresql-icon.png' alt='postgresql' className='desktop-icons'/>
                                <Image src='/images/heroku-icon.png' alt='heroku' className='desktop-icons'/>
                                <Image src='/images/github-icon.png' alt='github' className='desktop-icons'/>
                                </Image.Group>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Desktop>
            </div>
        )
    }

}

export default Home