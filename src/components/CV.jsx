import * as React from "react";
import { Container, Divider, Header, Segment, Responsive } from "semantic-ui-react";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Desktop = props => <Responsive {...props} minWidth={768} />;

const CV = () => {
    return(
        <div>
            <Mobile>
            <Container>
                <Divider horizontal className='cv-divider'>
                    <Header as='h2'>About Me</Header>
                </Divider>
                    <div className='descriptive-text'>
                        <p>I'm a junior programmer with a background in finance, where I worked as a currency trader and consultant.
                        During this time, I got to work closely with different development teams and software engineers, which sparked my love affair with coding.</p>
                        <p>After learning to write database queries in SQL and trying to teach myself C++ in the evenings, I decided to take the plunge and fully commit to becoming a developer, enrolling in the Flatiron bootcamp.
                        I have a real passion for creating things and helping to solve challenges, and enjoy working in collaborative environments where teamwork is promoted.</p>
                    </div>
                <Divider horizontal className='cv-divider'>
                    <Header as='h2'>Technical Experience</Header>
                </Divider>
                    <div className='experience-container'>
                        <Header as='h2'>Flatiron School
                            <Header.Subheader>Software Development Immersive</Header.Subheader>
                        </Header>
                        <div>
                            <p><strong>Core Languages: </strong>
                                <br/>Ruby, JavaScript, SQL.</p>
                            <p><strong>Core Libraries: </strong>
                                <br/>Node.js, React.js, React-Router, Redux, Ruby on Rails, Sinatra, HTML5, CSS, SQLite, PostgreSQL.</p>
                            <p>
                                Experienced using MVC architecture and RESTful API design, creating accessible and progressive web applications,
                                deploying both front-end and back-end projects to Heroku, and using Git for version control.
                            </p>
                            <p>
                                Built and hosted API's using a Ruby/PostgreSQL back-end stack, implemented user authentication via 0auth and JWT, worked extensively with Google
                                Maps documentation and API's to create a React app based on the Google Maps technology as well as utilising libraries such as Semantic and Bootstrap for UI design.
                                A beginner's knowledge of Python and C++.
                            </p>
                        </div>
                    </div>
                <Divider horizontal className='cv-divider'>
                    <Header as='h2'>Professional Experience</Header>
                </Divider>
                    <div className='experience-container'>
                        <Header as='h2'>Price Markets
                            <Header.Subheader>Consultant - Risk, Trading & Operations</Header.Subheader>
                        </Header>
                        <div>
                            <ul>
                                <li>Acted as a consultant on risk management solutions for both automated and manual market making strategies.</li>
                                <li>Reinforced the company's efforts to establish a strong presence in the emerging markets foreign exchange sector whilst reducing the firm’s exposure and risk.</li>
                                <li>Helped streamline P&L reports between accounting and trading/market making teams for accurate reporting.</li>
                                <li>Built tools to track risk across multiple platforms, calculating net positions from orders received from client API’s.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='experience-container'>
                        <Header as='h2'>ACM Group
                            <Header.Subheader>Execution Trader & Market Maker</Header.Subheader>
                        </Header>
                        <div>
                            <ul>
                                <li>Specialised focus on market making and execution trading in derivatives and over-the-counter products across a range of markets including developed and emerging market foreign exchange, commodities and equities. Executed orders for institutional and high net-worth clients via phone or Bloomberg messenger.</li>
                                <li>Managed client relationships on a daily basis, assisted with all needs, from trade execution to general market insights.</li>
                                <li>Used a variety of algorithms to execute large equity and futures orders.</li>
                                <li>Experienced with cross-hedging over-the-counter products and contracts-for-differences with cash equities and futures, trading commodity and interest rate spreads and processing give-ups.</li>
                                <li>Analysed and profiled product risk and flow, reporting to senior staff with detailed analysis and summaries of findings.</li>
                                <li>Created a wide array of models in Excel that were used to monitor asset exposure in real time across multiple asset classes, reconcile internal and external hedge accounts to avoid costly booking errors and track intraday P&L.</li>
                                <li>Trained a junior member of staff to become an execution trader.</li>
                            </ul>
                        </div>
                    </div>
                <Divider horizontal className='cv-divider'>
                    <Header as='h2'>Volunteer Work</Header>
                </Divider>
                    <div className='experience-container'>
                        <Header as='h2'>Codebar
                            <Header.Subheader>Coach</Header.Subheader>
                        </Header>
                        <div>
                            <ul>
                                <p>I volunteer at Codebar, helping people learn how to code who are just starting out in Ruby, JavaScript or React.</p>
                                <p>It's a great experience with a friendly crowd, so if you're an experienced developer or looking to learn, I'd highly recommend coming along one evening.</p>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Mobile>
            <Desktop>
                <Container>
                    <Divider horizontal className='cv-divider'>
                        <Header as='h2'>About Me</Header>
                    </Divider>
                        <div className='descriptive-text'>
                            <p>I'm a junior programmer with a background in finance, where I worked as a currency trader and consultant.
                            During this time, I got to work closely with different development teams and software engineers, which sparked my love affair with coding.</p>
                            <p>After learning to write database queries in SQL and trying to teach myself C++ in the evenings, I decided to take the plunge and fully commit to becoming a developer, enrolling in the Flatiron bootcamp.
                            I have a real passion for creating things and helping to solve challenges, and enjoy working in collaborative environments where teamwork is promoted.</p>
                        </div>
                    <Divider horizontal className='cv-divider'>
                        <Header as='h2'>Technical Experience</Header>
                    </Divider>
                        <div className='experience-container'>
                            <Segment basic>
                                <Header as='h3' floated='left'>Flatiron School
                                    <Header.Subheader>Software Development Immersive</Header.Subheader>
                                </Header>
                                <Header as='h3' floated='right'>Sep 2018 - Jan 2019
                                    <Header.Subheader>London, United Kingdom</Header.Subheader>
                                </Header>
                            </Segment>
                            <div><br/>
                                <ul>
                                    <p>
                                        <strong>Core Languages: </strong>Ruby, JavaScript, SQL.
                                            <br/>
                                        <strong>Core Libraries: </strong>Node.js, React.js, React-Router, Redux, Ruby on Rails, Sinatra, HTML5, CSS, SQLite, PostgreSQL.
                                    </p>
                                    <p>
                                    Experienced using MVC architecture and RESTful API design, creating accessible and progressive web applications,
                                    deploying both front-end and back-end projects to Heroku, and using Git for version control.
                                    Built and hosted API's using a Ruby/PostgreSQL back-end stack, implemented user authentication via 0auth and JWT, worked extensively with Google
                                    Maps documentation and API's to create a React app based on the Google Maps technology as well as utilising libraries such as Semantic and Bootstrap for UI design.
                                    A beginner's knowledge of Python and C++.
                                    </p>
                                </ul>
                            </div>
                        </div>
                    <Divider horizontal className='cv-divider'>
                        <Header as='h2'>Professional Experience</Header>
                    </Divider>
                        <div className='experience-container'>
                            <Segment basic>
                                <Header as='h3' floated='left'>Price Markets
                                    <Header.Subheader>Consultant - Risk, Trading & Operations</Header.Subheader>
                                </Header>
                                <Header as='h3' floated='right'>Jul 2017 - Sep 2017
                                    <Header.Subheader>London, United Kingdom</Header.Subheader>
                                </Header>
                            </Segment>
                            <div><br/>
                                <ul>
                                    <li>Acted as a consultant on risk management solutions for both automated and manual market making strategies.</li>
                                    <li>Reinforced the company's efforts to establish a strong presence in the emerging markets foreign exchange sector whilst reducing the firm’s exposure and risk.</li>
                                    <li>Helped streamline P&L reports between accounting and trading/market making teams for accurate reporting.</li>
                                    <li>Built tools to track risk across multiple platforms, calculating net positions from orders received from client API’s.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='experience-container'>
                            <Segment basic>
                                    <Header as='h3' floated='left'>ACM Group
                                        <Header.Subheader>Execution Trader & Market Maker</Header.Subheader>
                                    </Header>
                                    <Header as='h3' floated='right'>Jan 2013 - Jun 2017
                                        <Header.Subheader>London, United Kingdom</Header.Subheader>
                                    </Header>
                                </Segment>
                            <div><br/>
                                <ul>
                                    <li>Specialised focus on market making and execution trading in derivatives and over-the-counter products across a range of markets including developed and emerging market foreign exchange, commodities and equities. Executed orders for institutional and high net-worth clients via phone or Bloomberg messenger.</li>
                                    <li>Managed client relationships on a daily basis, assisted with all needs, from trade execution to general market insights.</li>
                                    <li>Used a variety of algorithms to execute large equity and futures orders.</li>
                                    <li>Experienced with cross-hedging over-the-counter products and contracts-for-differences with cash equities and futures, trading commodity and interest rate spreads and processing give-ups.</li>
                                    <li>Analysed and profiled product risk and flow, reporting to senior staff with detailed analysis and summaries of findings.</li>
                                    <li>Created a wide array of models in Excel that were used to monitor asset exposure in real time across multiple asset classes, reconcile internal and external hedge accounts to avoid costly booking errors and track intraday P&L.</li>
                                    <li>Trained a junior member of staff to become an execution trader.</li>
                                </ul>
                            </div>
                        </div>
                    <Divider horizontal className='cv-divider'>
                        <Header as='h2'>Volunteer Work</Header>
                    </Divider>
                        <div className='experience-container'>
                            <Segment basic>
                                <Header as='h3' floated='left'>Codebar
                                    <Header.Subheader>Coach</Header.Subheader>
                                </Header>
                                <Header as='h3' floated='right'>Oct 2018 - Present
                                    <Header.Subheader>London, United Kingdom</Header.Subheader>
                                </Header>
                            </Segment>
                            <br />
                            <div>
                                <ul>
                                    <p>
                                        I volunteer at Codebar, helping people learn how to code who are just starting out in Ruby, JavaScript or React.<br />
                                        It's a great experience with a friendly crowd, so if you're an experienced developer or looking to learn,
                                        I'd highly recommend coming along one evening.
                                    </p>
                                </ul>
                            </div>
                        </div>
                </Container>
            </Desktop>
        </div>
    )
}
export default CV
